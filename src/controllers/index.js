const db = require('../models/database');

class IndexController {
    getIndex(req, res) {
        res.send('<form method="POST" action="/login"><input name="username"/><input name="password"/><button type="submit">Login</button></form>');
    }

    postLogin(req, res) {
        const { username, password } = req.body;
        const query = `SELECT * FROM users WHERE username = '${username}' AND password = '${password}'`;

        db.get(query, (err, row) => {
            if (err) {
                res.status(500).send('Internal Server Error');
            } else if (row) {
                res.send('Login successful! Here is your flag: FLAG{SQL_INJECTION_SUCCESS}');
            } else {
                res.send('Invalid credentials');
            }
        });
    }
}

module.exports = IndexController;