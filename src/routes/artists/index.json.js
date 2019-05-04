import artists from './_artists.js';

const contents = JSON.stringify(artists.map(artist => ({
  title: artist.title,
  slug: artist.slug
})));

export function get(req, res) {
	res.writeHead(200, {
		'Content-Type': 'application/json'
	});

	res.end(contents);
}