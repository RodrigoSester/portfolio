import { Knex } from 'knex';
import path from 'path';

require('dotenv').config();

module.exports = {
  client: 'pg',
  connection: {
    server: path.join(process.env.DB_DATABASE || ''),
    database: process.env.DB_DATABASE,
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT || '3000'),
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD
  },
  migrations: {
    directory: path.join('./database/migrations'),
    extension: 'ts'
  }
} as Knex.Config;