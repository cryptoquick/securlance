# SecurLance

## Stack

- Svelte
- Sapper
- Postgres
- BTC Pay Server
- Digital Ocean
  - Managed Postgres
  - Block Storage for BTC Full Node
  - Object Store for Image storage
- Node.js
  - PDF rendering
  - Image processing
- Stripe for traditional payments

## Local Development

```bash
npm install
npm run dev
```

Open up [localhost:3000](http://localhost:3000).

Consult [sapper.svelte.technology](https://sapper.svelte.technology) for help.


## Structure

Sapper expects to find two directories in the root of your project —  `src` and `static`.


### src

The [src](src) directory contains the entry points for your app — `client.js`, `server.js` and (optionally) a `service-worker.js` — along with a `template.html` file and a `routes` directory.


#### src/routes

This is the heart of your Sapper app. There are two kinds of routes — *pages*, and *server routes*.

**Pages** are Svelte components written in `.html` files. When a user first visits the application, they will be served a server-rendered version of the route in question, plus some JavaScript that 'hydrates' the page and initialises a client-side router. From that point forward, navigating to other pages is handled entirely on the client for a fast, app-like feel. (Sapper will preload and cache the code for these subsequent pages, so that navigation is instantaneous.)

**Server routes** are modules written in `.js` files, that export functions corresponding to HTTP methods. Each function receives Express `request` and `response` objects as arguments, plus a `next` function. This is useful for creating a JSON API, for example.

There are three simple rules for naming the files that define your routes:

* A file called `src/routes/about.html` corresponds to the `/about` route. A file called `src/routes/blog/[slug].html` corresponds to the `/blog/:slug` route, in which case `params.slug` is available to the route
* The file `src/routes/index.html` (or `src/routes/index.js`) corresponds to the root of your app. `src/routes/about/index.html` is treated the same as `src/routes/about.html`.
* Files and directories with a leading underscore do *not* create routes. This allows you to colocate helper modules and components with the routes that depend on them — for example you could have a file called `src/routes/_helpers/datetime.js` and it would *not* create a `/_helpers/datetime` route


### static

The [static](static) directory contains any static assets that should be available. These are served using [sirv](https://github.com/lukeed/sirv).

In your [service-worker.js](app/service-worker.js) file, you can import these as `files` from the generated manifest...

```js
import { files } from '../__sapper__/service-worker.js';
```

...so that you can cache them (though you can choose not to, for example if you don't want to cache very large files).


## Bundler config

Sapper uses Rollup or webpack to provide code-splitting and dynamic imports, as well as compiling your Svelte components. With webpack, it also provides hot module reloading. As long as you don't do anything daft, you can edit the configuration files to add whatever plugins you'd like.


## Production mode and deployment

To start a production version of your app, run `npm run build && npm start`. This will disable live reloading, and activate the appropriate bundler plugins.

You can deploy your application to any environment that supports Node 8 or above. As an example, to deploy to [Now](https://zeit.co/now), run these commands:

```bash
npm install -g now
now
```

## Generate Signatures

`secret/jwt` - https://8gwifi.org/ecsignverify.jsp - P-521


## Using external components with webpack

When using Svelte components installed from npm, such as [@sveltejs/svelte-virtual-list](https://github.com/sveltejs/svelte-virtual-list), Svelte needs the original component source (rather than any precompiled JavaScript that ships with the component). This allows the component to be rendered server-side, and also keeps your client-side app smaller.

Because of that, it's essential that webpack doesn't treat the package as an *external dependency*. You can either modify the `externals` option in [webpack/server.config.js](webpack/server.config.js), or simply install the package to `devDependencies` rather than `dependencies`, which will cause it to get bundled (and therefore compiled) with your app:

```bash
yarn add -D @sveltejs/svelte-virtual-list
```


## Bugs and feedback

Get in touch with @cryptoquick, on GitHub, email, or social media.