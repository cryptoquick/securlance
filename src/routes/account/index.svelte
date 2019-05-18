<style>
  form {
    display: flex;
    flex-direction: column;
    max-width: 50%;
    margin: 0 auto;
  }

  @media (max-width: 1024px) {
    form {
      max-width: 100%;
    }
  }

  .left, .right {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .top, .bottom {
    display: flex;
    flex-direction: row;
  }

  .left {
    width: 25%;
  }

  .right {
    width: 75%;
  }

	h1, h2, h3, p {
		width: 100%;
		text-align: center;
  }
  
  input {
    border: 1px solid rgb(255,62,0,0.25);
    background-color: transparent;
    height: 3em;
    width: 100%;
    text-align: center;
    margin: 1em 0;
    padding: 0;
    font-size: 16px;
  }

  input[type="submit"] {
    height: 5em;
    margin: 1em 0;
  }

  label {
    height: 3em;
    width: 100%;
    line-height: 3em;
    margin: 1em 0;
    padding: 0;
    font-size: 16px;
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
	<title>SecurLance Account</title>
</svelte:head>

<h1>SecurLance Account</h1>

<h2>Join SecurLance</h2>

<h3>Guaranteed Payment, Guaranteed Delivery</h3>

{#await promise}
  <p>Loading...</p>
{:then user}
  {#if user.loggedIn}
    <div class="account">
      <form action="/account.json" method="POST">
        <div class="top">
          <div class="left">
            <label for="email">Email</label>
            <label for="password">Password</label>
          </div>
          <div class="right">
            <input type="email" name="email" id="email" disabled value={user.email} />
            <input type="password" name="password" id="password" value={user.password} />
          </div>
        </div>
        <div class="bottom">
        <input type="submit" value="Update">
        </div>
      </form>
    </div>
  {:else}
    <div>
      <form action="/account.json" method="POST">
        <div class="top">
          <div class="left">
            <label for="email">Email</label>
            <label for="password">Password</label>
          </div>
          <div class="right">
            <input type="email" name="email" id="email" />
            <input type="password" name="password" id="password" />
          </div>
        </div>
        <div class="bottom">
        <input type="submit" value="Register / Login">
        </div>
      </form>
    </div>
  {/if}
{:catch error}
  <p>There was an error getting account data.</p>
{/await}