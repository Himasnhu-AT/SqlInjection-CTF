const db = require('../models/database');

class IndexController {
    getIndex(req, res) {
        res.send('<form method="POST" action="/login"><input name="username"/><input name="password"/><button type="submit">Login</button></form>');
    }

    postLogin(req, res) {
        let { username, password } = req.body;

        // Minimal sanitization
        // username = username.replace(/'/g, "");
        // password = password.replace(/'/g, "");

        const query = `SELECT * FROM users WHERE username = '${username}' AND password = '${password}'`;

        console.log(query)

        db.get(query, (err, row) => {
            if (err) {
                res.status(500).send('Internal Server Error');
            } else if (row) {
                if (row.role === 'admin') {
                    res.send('Login successful! Here is your flag: FLAG{SQL_INJECTION_SUCCESS}');
                } else {
                    res.send('Login successful! How can we help you today?');
                }
            } else {
                res.send('Invalid credentials');
            }
        });
    }
}

module.exports = IndexController;