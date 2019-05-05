<script>
	export let segment;
</script>

<style>
	nav {
		display: flex;
		border-bottom: 1px solid rgba(255,62,0,0.25);
		font-weight: 300;
		justify-content: center;
	}

	ul {
		display: flex;
		margin: 0 auto;
		margin: 0;
		padding: 0;
	}

	li {
		display: block;
		padding: 0 10px;
	}

	.selected {
		position: relative;
		display: inline-block;
	}

	.selected::after {
		position: absolute;
		content: '';
		width: 80px;
		height: 2px;
		background-color: rgb(255,62,0);
		display: block;
		bottom: -1px;
	}

	a {
		font-weight: 400;
		text-decoration: none;
		padding: 1em 0;
		width: 80px;
		text-align: center;
		display: block;
	}

	a:hover {
		background-color: rgba(255,62,0,0.25);
	}
</style>

<!-- for links, we're using rel=prefetch so that Sapper prefetches
	data when we hover over the link or tap it on a touchscreen -->

<nav>
	<ul>
		<li><a rel=prefetch class='{segment === undefined ? "selected" : ""}' href='.'>Home</a></li>
		<li><a rel=prefetch class='{segment === "art" ? "selected" : ""}' href='art'>Art</a></li>
		<li><a rel=prefetch class='{segment === "artists" ? "selected" : ""}' href='artists'>Artists</a></li>
		<li><a rel=prefetch class='{segment === "about" ? "selected" : ""}' href='about'>About</a></li>
		<li><a rel=prefetch class='{segment === "blog" ? "selected" : ""}' href='blog'>Blog</a></li>
	</ul>
</nav>