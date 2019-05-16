<script>
	export let segment;
</script>

<style>
	nav {
		display: flex;
		background: rgb(255, 223, 0);
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
	}

	.selected {
		position: relative;
		display: inline-block;
	}

	.selected::after {
		position: absolute;
		content: '';
		width: 100px;
		height: 2px;
		background-color: rgb(255, 127, 0);
		display: block;
		bottom: -1px;
		left: -1px;
	}

	a {
		font-weight: 400;
		text-decoration: none;
		width: 80px;
		text-align: center;
		display: block;
		padding: 1em 10px;
	}

	a:hover {
		background-color: rgb(255, 127, 0);
	}
</style>

<!-- for links, we're using rel=prefetch so that Sapper prefetches
	data when we hover over the link or tap it on a touchscreen -->

<nav>
	<ul>
		<li><a rel=prefetch class='{segment === undefined ? "selected" : ""}' href='.'>SecurLance</a></li>
		<li><a rel=prefetch class='{segment === "invoice" ? "selected" : ""}' href='invoice'>Invoice</a></li>
		<li><a rel=prefetch class='{segment === "about" ? "selected" : ""}' href='about'>About</a></li>
		<li><a rel=prefetch class='{segment === "account" ? "selected" : ""}' href='account'>Account</a></li>
	</ul>
</nav>