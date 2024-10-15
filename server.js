const express = require('express');
const mysql = require('mysql');

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

app.post('/login', (req, res) => {
    const { username, password } = req.body;

    const sql = 'SELECT * FROM users WHERE username = ? AND password = ?';
    db.query(sql, [username, password], (err, results) => {
        if (err) throw err;

        if (results.length > 0) {
            res.json({ success: true });
        } else {
            res.json({ success: false, message: 'Invalid username or password' });
        }
    });
});

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
