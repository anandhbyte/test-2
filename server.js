// ... (existing database connection and login handling) ...

app.post('/register', (req, res) => {
    const { username, password } = req.body;

    const sql = 'INSERT INTO users (username, password) VALUES (?, ?)';
    db.query(sql, [username, password], (err, results) => {
        if (err) throw err;

        res.json({ success: true, message: 'Registration successful' });
    });
});
