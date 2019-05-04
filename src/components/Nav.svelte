<script>
	export let segment;
</script>

<style>
	nav {
		border-bottom: 1px solid rgba(255,62,0,0.1);
		font-weight: 300;
		padding: 0 1em;
	}

	ul {
		margin: 0;
		padding: 0;
	}

	/* clearfix */
	ul::after {
		content: '';
		display: block;
		clear: both;
	}

	li {
		display: block;
		float: left;
	}

	.selected {
		position: relative;
		display: inline-block;
	}

	.selected::after {
		position: absolute;
		content: '';
		width: calc(100% - 1em);
		height: 2px;
		background-color: rgb(255,62,0);
		display: block;
		bottom: -1px;
	}

	a {
		text-decoration: none;
		padding: 1em 0.5em;
		display: block;
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