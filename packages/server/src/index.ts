import express from 'express';
import { Pool } from 'pg'
require('dotenv').config();

const pool = new Pool({
    database: process.env.DB_DATABASE,
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT!),
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD
})
const app = express();

app.get('/experiences', async ( req, res ) => {
    const query = `
        SELECT * FROM experience
    `

    pool.query(query, ( err, { rows } ) => {
        res.status(200).json(rows);
    });
});

app.listen(process.env.PORT, () => {
    console.log( `server started at http://localhost:${ process.env.PORT }` );
});