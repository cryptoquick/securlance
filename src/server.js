import sirv from 'sirv';
import express from 'express';
import compression from 'compression';
import * as sapper from '@sapper/server';
import expressGa from 'express-ga-middleware';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';

const app = express()

const { PORT, NODE_ENV } = process.env;
const dev = NODE_ENV === 'development';

app
	.use(expressGa('UA-42266637-2'))
	.use(bodyParser.json())
	.use(bodyParser.urlencoded({ extended: false }))
	.use(cookieParser())
	.use(
		compression({ threshold: 0 }),
		sirv('static', { dev }),
		sapper.middleware()
	)
	.listen(PORT, err => {
		if (err) console.log('error', err);
	});
