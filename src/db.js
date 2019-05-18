import config from '../knexfile';
const env = 'development';
import knex from 'knex';

const db = knex(config[env])

export default db;

db.migrate.latest([config]);
