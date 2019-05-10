<style>
  form {
    display: flex;
    flex-direction: column;
    max-width: 50%;
    margin: 0 auto;
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

	h1 {
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

<svelte:head>
	<title>Frisky Account</title>
</svelte:head>

<h1>Frisky Account</h1>

<div class="account">
  <form>
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
    <input type="submit" value="Register / Login" name="password" id="password">
    </div>
  </form>
</div>
