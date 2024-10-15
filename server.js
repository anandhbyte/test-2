const express = require('express');
const mysql = require('mysql');
const bcrypt = require('bcrypt');

const app = express();
const port = 3000;

// Replace with your database connection details
const db = mysql.createConnection({
    host: 'your_host',
    user: 'your_user',
    password: 'your_password',
    database: 'your_database'
});

db.connect((err) => {
    if (err) throw err;
    console.log('Connected to MySQL database!');
});

app.use(express.json());

app.post('/login', async (req, res) => {
    const { username, password } = req.body;

    // Validate input
    if (!username || !password) {
        return res.status(400).json({ error: 'Please fill in all fields.' });
    }

    // Check if username exists
    const existingUserQuery = 'SELECT * FROM users WHERE username = ?';
    db.query(existingUserQuery, [username], async (err, results) => {
        if (err) throw err;

        if (results.length === 0) {
            return res.status(400).json({ error: 'Invalid username or password.' });
        }

        // Compare hashed passwords
        const storedPassword = results
