<script>
	export let segment;
</script>

<style>
	.top {
		background: rgb(255, 223, 0);
		width: 100%;
	}

	nav {
		display: flex;
		font-weight: 300;
		justify-content: center;
		flex-direction: row;
	}

	.selected {
		background-color: rgb(255, 127, 0);
	}

	a {
		font-weight: 400;
		text-decoration: none;
		text-align: center;
		display: block;
		width: 100%;
		padding: 1em 10px;
	}

	a:hover {
		background-color: rgb(255, 175, 0);
	}

  @media (min-width: 1024px) {
		nav {
			padding: 0 25%;
		}
  }
</style>

<div class="top">
	<nav>
		<a rel=prefetch class='{segment === undefined ? "selected" : ""}' href='.'>SecurLance</a>
		<a rel=prefetch class='{segment === "invoice" ? "selected" : ""}' href='invoice'>Invoice</a>
		<a rel=prefetch class='{segment === "about" ? "selected" : ""}' href='about'>About</a>
		<a rel=prefetch class='{segment === "account" ? "selected" : ""}' href='account'>Account</a>
	</nav>
</div>