<script context="module">
	export function preload({ params, query }) {
		return this.fetch(`art.json`).then(r => r.json()).then(artists => ({ artists }));
	}
</script>

<script>
	export let artists;

	export let view = 'grid';
</script>

<style>
	.gallery img {
		max-width: 13em;
    max-height: 13em;
	}
</style>

<svelte:head>
	<title>Artists</title>
</svelte:head>

<h1>Artists</h1>

<div class='gallery'>
	{#each artists as artist}
    <div>
      <h2><a href='artists/{artist.slug}'>{artist.title}</a></h2>
      {#each artist.gallery as image}
        <img src='art/{artist.slug}/{image}' alt='Art by {image.title}'>
      {/each}
    </div>
  {/each}
</div>