const express = require('express');
const { Pool } = require('pg');

const app = express();
const port = 3000;

// Replace with your PostgreSQL database connection details
const pool = new Pool({
    connectionString: 'postgresql://anandh_kh1y_user:EWDQkVHLpEnbs8Kxy958iHkyGWTs5Z98@dpg-cs7e5vbtq21c73c579kg-a.oregon-postgres.render.com/anandh_kh1y'
});

app.get('/users', (req, res) => {
    pool.query('SELECT * FROM users', (error, results) => {
        if (error) {
            throw error;
        }
        res.json(results.rows);
    });
});

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
