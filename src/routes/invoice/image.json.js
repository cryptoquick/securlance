import { process } from '../../lib/image'

export async function post(req, res) {
	// TODO auth, storage, database
	const {type, name, date, data} = req.body
	const image = await process(type, data)
	res.json(image)
}

export function get(req, res) {
	res.writeHead(200, {
		'Content-Type': 'application/json'
	});

	res.end(data);
}