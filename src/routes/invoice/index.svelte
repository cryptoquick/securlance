<script context="module">
	export function preload(page, session) {
    const promise = new Promise(async (resolve, reject) => { 
      try {
        const res = await this.fetch('/account.json', {
          credentials: 'include',
        });

        if (res.ok) {
          const user = await res.json();
          // return { user };
          resolve(user)
        } else {
          // throw new Error(res.status);
          reject()
        }
      } catch (err) {
        reject()
        // throw new Error(err);
      }
    })
    return { promise }
  }
</script>

<script>
  export let promise;
</script>

<style>
	h1 {
		width: 100%;
		text-align: center;
	}
</style>

<svelte:head>
	<title>SecurLance - Invoice</title>
</svelte:head>

{#await promise}
  <p>Loading...</p>
{:then user}
	<h1>New Invoice</h1>

	<div>TODO - form, submit, document, processing</div>
{:catch error}
	<h1>Invoice</h1>

  <p><a href="/about">Learn more about SecurLance invoices.</a></p>
{/await}