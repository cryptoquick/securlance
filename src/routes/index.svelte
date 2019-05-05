<style>
	h1, p {
		text-align: center;
		margin: 0 auto;
	}

	h1 {
		font-size: 2.8em;
		text-transform: uppercase;
		font-weight: 700;
		margin: 0 0 0.5em 0;
	}

	img {
		width: 100%;
		max-width: 400px;
		margin: 0 0 1em 0;
	}

	p {
		margin: 1em auto;
	}

	@media (min-width: 480px) {
		h1 {
			font-size: 4em;
		}
	}

	button {
		border: none;
		background: rgba(255,62,0,0.25);
		padding: 20px;
		font-size: 20px;
	}

	button:hover {
		background: rgba(255,62,0,0.5);
	}
</style>

<script>
	const signup = () => {
		alert('Accounts not yet implemented, but you can email me at cryptoquick@pm.me')
	}
</script>

<svelte:head>
	<title>Frisky Market</title>
</svelte:head>

<p><img src="/logo.svg" alt="Frisky Logo" /></p>
<h1>Frisky Market</h1>
<p>Subscribe to artists and purchase art on Frisky Market!</p>
<p>All sales through cryptocurrency only.</p>
<p><button on:click={signup}>Sign up now!</button></p>