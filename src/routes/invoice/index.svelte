<style>
	h1 {
		width: 100%;
		text-align: center;
	}
</style>

<script context="module">
	export function preload(page, session) {
    const promise = new Promise(async (resolve, reject) => { 
      try {
        const res = await this.fetch('/account.json', {
          credentials: 'include',
        });

        if (res.ok) {
          const user = await res.json();
          resolve(user)
        } else {
          reject()
        }
      } catch (err) {
        reject()
      }
    })
    return { promise }
  }
</script>

<script>
  export let promise;
</script>

<svelte:head>
	<title>SecurLance - Invoice</title>
</svelte:head>

{#await promise}
  <p>Loading...</p>
{:then user}
	{#if user.loggedIn}
		<h1>Your Invoices</h1>

		<div>
      Hi there! We haven't finished this yet. You will get an email once we do.
    </div>

    <div>
      <a href="/invoice/image">Upload images</a>
    </div>
	{:else}
		<h1>Invoice</h1>

		<p><a href="/about">Learn more about SecurLance invoices.</a></p>
	{/if}
{:catch error}
	<p>There was an error getting invoice data.</p>
{/await}