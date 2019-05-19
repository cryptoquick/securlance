import config from '../knexfile';
import knex from 'knex';

const { NODE_ENV } = process.env
const db = knex(config[NODE_ENV])

export default db;

db.migrate.latest([config]);
