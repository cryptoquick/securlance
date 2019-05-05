import artists from '../artists/_artists.js';

const contents = JSON.stringify(artists);

export function get(req, res) {
	res.writeHead(200, {
		'Content-Type': 'application/json'
	});

	res.end(contents);
}