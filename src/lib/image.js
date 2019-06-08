const sharp = require('sharp')
const bitcoin = require('bitcoin-core')

const client = new bitcoin({
  host: 'btc.securlance.com',
  username: 'bitcoin',
  password: 'h7TVQuArgJdpVXs2q8ai3FhxsiHkVpPzpLDGdb44vNXizubgcJ',
  ssl: true,
  port: 443,
})

const white = { r: 255, g: 255, b: 255, alpha: 1.0 }

export const process = async (type, data) => {
  try {
    // Get seed
    const info = await client.getBlockchainInfo()
    console.log(info)
    
    const seed = BigInt('0x' + info.bestblockhash)
    const hex = seed.toString(16)
    const dec = seed.toString(10)
    const bin = seed.toString(2)

    console.log('seed hex:', hex)
    console.log('seed dec:', dec)
    console.log('seed bin:', bin)
    console.log('bin length:', bin.length)

    // Get image (and image dimensions)
    const string = data.replace(`data:${type};base64,`, '')
    const buffer = Buffer.from(string, 'base64')
    const image = sharp(buffer)
    const metadata = await image.metadata()
    console.log('image width/height:', metadata.width, metadata.height)

    const size = Math.min(metadata.width, metadata.height, 1024)

    // Make grid pattern
    const pattern = bin.split('').reverse()
    console.log('reversed pattern', pattern.join(''))

    // Resize image
    const resized = await image.resize(size, size, { fit: 'contain', background: white })

    // Get blurred image
    const blocks = 10
    const blurred = await resized.clone().blur(10).toBuffer()

    // Composite image
    const grid = Math.floor(size / blocks)
    const tiles = []

    let ratio = 0
    let i = 0
    for (let y = 0; y < blocks; y++) {
      for (let x = 0; x < blocks; x++) {
        const blur = pattern[i] === '1'
        if (blur) ratio++

        if (blur) {
          tiles.push({
            input: await sharp(blurred).extract({
              left: x * grid,
              top: y * grid,
              width: grid,
              height: grid,
            }).toBuffer(),
            left: x * grid,
            top: y * grid,
          })
        }

        i++
      }
    }

    const sample = await resized.composite(tiles)

    // Save image
    const result = await sample.jpeg({ quality: 100 }).toBuffer('examples/sample1.jpg')

    return {
      image: `data:image/jpeg;base64,${result.toString('base64')}`,
      metadata: {
        height: info.height,
        hash: {
          hex,
          dec,
          bin,
        },
        ratio: Math.trunc((ratio / blocks ** 2) * 100),
      },
    }
  }
  catch (err) {
    console.error(err)
  }
}
