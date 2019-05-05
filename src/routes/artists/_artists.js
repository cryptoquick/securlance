// Ordinarily, you'd generate this data from markdown files in your
// repo, or fetch them from a database of some kind. But in order to
// avoid unnecessary dependencies in the starter template, and in the
// service of obviousness, we're just going to leave it here.

// This file is called `_artists.js` rather than `artists.js`, because
// we don't want to create an `/blog/artists` route — the leading
// underscore tells Sapper not to do that.

const artists = [
	{
		title: 'DivDurv',
		slug: 'divdurv',
		logo: 'divdurv_logo_v1.jpg',
    html: `
      I love to draw and paint fantasy creatures, monsters, furries and masculine beings, especially humans and goblins.

      My dream is to make this a full-time enterprise and realize not only my own fantasy worlds and stories, but to help others visualize their own.
      
      I hope to eventually produce art for visual novels and comics.
		`,
		gallery: [
			'1221430916.plexadonn_fox_in_the_snow.jpg',
			'1255481292.plexadonn_roo_by_mount_garfield.jpg',
			'1271200470.plexadonn_i-bass_j-guitar.jpg',
			'jiujitsu01.jpg',
		],
		addresses: {
			btc: '3EXQ884XMqzQsr9dT4BkQPCpJkLZb2biSg',
			eth: '0x93B0D5e1093413C8Eec44d251FE25449E51ab89E',
		},
	},
];

artists.forEach(artist => {
	artist.html = artist.html.replace(/^\t{3}/gm, '');
});

export default artists;