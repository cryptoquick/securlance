import config from '../knexfile';
const env = process.env.NODE_ENV;
import knex from 'knex';

const db = knex(config[env])

export default db;

db.migrate.latest([config]);
