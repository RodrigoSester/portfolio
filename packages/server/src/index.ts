import express, { Request } from 'express';
import { Pool } from 'pg'
import  config from './config/config.connection';

require('dotenv').config();

const pool = new Pool(config)
const app = express();
app.use(express.json())

app.get('/experiences', async ( req, res ) => {
    const query = `
        SELECT 
            id,
            title,
            description,
            date,
            created_at
        FROM 
            experience
    `

    pool.query(query, ( err, { rows } ) => {
        res.status(200).json(rows);
    });
});

app.post('/experiences', async ( req: Request, res ) => {
    const { title, description, date } = req.body;

    const query = `
        INSERT INTO experience (
            title,
            description,
            date
        ) VALUES (
            $1,
            $2,
            $3
        ) RETURNING 
            id,
            title,
            description,
            date,
            created_at
    `

    const values = [ title, description, date ];

    pool.query(query, values, ( err, { rows } ) => {
        res.status(200).json(rows);
    });
});

app.listen(process.env.PORT, () => {
    console.log( `server started at http://localhost:${ process.env.PORT }` );
});