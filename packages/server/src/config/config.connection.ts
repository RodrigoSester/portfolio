import { PoolConfig } from 'pg';

require('dotenv').config();

const config: PoolConfig = {
    database: process.env.DB_DATABASE,
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT || '3000'),
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD
}

export default config;