<script context="module">
	export function preload({ params, query }) {
		return this.fetch(`artists.json`).then(r => r.json()).then(artists => ({ artists }));
	}
</script>

<script>
	export let artists;

	export let view = 'feed';
</script>

<style>
	ul {
		margin: 0 0 1em 0;
		line-height: 1.5;
	}
</style>

<svelte:head>
	<title>Artists</title>
</svelte:head>

<h1>Artists</h1>

<ul>
	{#each artists as artist}
		<li><a rel='prefetch' href='artists/{artist.slug}'>{artist.title}</a></li>
	{/each}
</ul>