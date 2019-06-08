<style>
	h1 {
		width: 100%;
		text-align: center;
	}
</style>

<script context="module">
	export function preload(page, session) {
    const promise = new Promise(async (resolve, reject) => { 
      try {
        const res = await this.fetch('/account.json', {
          credentials: 'include',
        });

        if (res.ok) {
          const user = await res.json();
          resolve(user)
        } else {
          reject()
        }
      } catch (err) {
        reject()
      }
    })
    return { promise }
  }
</script>

<script>
  export let promise;

  let uploading = false
  let image;
  let metadata;
  let error;

  function upload() {
    uploading = true
    const input = document.querySelector('#upload')
    const reader = new FileReader()
    const file = input.files[0]

    reader.onload = async () => {
      try {
        const res = await fetch('/invoice/image.json', {
          credentials: 'include',
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            type: file.type,
            name: file.name,
            date: file.lastModified,
            data: reader.result,
          })
        })

        const data = await res.json()
        image = data.image
        metadata = data.metadata
        uploading = false
      } catch (err) {
        error = true
        uploading = false
        console.error(err)
      }
    }

    if (input.files.length) {
      reader.readAsDataURL(file)
    }
    else {
      uploading = false
    }
  }
</script>

<svelte:head>
	<title>SecurLance - Upload Invoice Document</title>
</svelte:head>

{#await promise}
  <p>Loading...</p>
{:then user}
	{#if user.loggedIn}
		<h1>Upload Invoice Document</h1>

    <p>Currently Supported Formats:</p>

    <ul>
      <li>JPEG</li>
      <li>PNG</li>
    </ul>

		<div>
      <input id="upload" type="file" accept="image/jpeg, image/png" /><br>
      <button on:click={upload} disabled={uploading}>{uploading ? 'Uploading...' : 'Upload'}</button>
    </div>

    {#if error}
      <p>There was an error uploading data.</p>
    {/if}

    {#if image}
      <p>Sample Metadata:</p>
      <ul>
        <li>Bitcoin Block Height: {metadata.height}</li>
        <li>Best Block Hash:
          <ul>
            <li>Hexadecimal: {metadata.hash.hex}</li>
            <li>Decimal: {metadata.hash.dec}</li>
            <li>Binary:<br>
              <textarea cols="80" rows="4" disabled>{metadata.hash.bin}</textarea>
            </li>
            <li>To verify, start at the least significant digit (verify in reverse).</li>
          </ul>
        </li>
        <li>Area of image obfuscated: {metadata.ratio}%</li>
      </ul>

      <img src={image} alt="Sample image" />
    {/if}
	{:else}
		<h1>Please Log In</h1>

		<p><a href="/account">Account Page</a></p>
	{/if}
{:catch error}
	<p>There was an error getting account data.</p>
{/await}