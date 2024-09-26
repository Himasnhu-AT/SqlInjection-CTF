const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database(':memory:');

db.serialize(() => {
    db.run("CREATE TABLE users (id INT, username TEXT, password TEXT)");
    db.run("INSERT INTO users (id, username, password) VALUES (1, 'admin', 'password')");
});

module.exports = db;