const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database(':memory:');

db.serialize(() => {
    db.run("CREATE TABLE users (id INT, username TEXT, password TEXT, role TEXT)");
    db.run("INSERT INTO users (id, username, password, role) VALUES (1, 'admin', 'password', 'admin')");
    db.run("INSERT INTO users (id, username, password, role) VALUES (2, 'user1', 'password1', 'user')");
    db.run("INSERT INTO users (id, username, password, role) VALUES (3, 'user2', 'password2', 'user')");

    db.run("CREATE TABLE credit_cards (id INT, user_id INT, card_number TEXT, expiry_date TEXT, cvv TEXT)");
    db.run("INSERT INTO credit_cards (id, user_id, card_number, expiry_date, cvv) VALUES (1, 2, '1234-5678-9012-3456', '12/23', '123')");
    db.run("INSERT INTO credit_cards (id, user_id, card_number, expiry_date, cvv) VALUES (2, 3, '2345-6789-0123-4567', '11/24', '456')");

    db.run("CREATE TABLE transactions (id INT, user_id INT, amount REAL, date TEXT, description TEXT)");
    db.run("INSERT INTO transactions (id, user_id, amount, date, description) VALUES (1, 2, 100.50, '2023-01-01', 'Grocery Shopping')");
    db.run("INSERT INTO transactions (id, user_id, amount, date, description) VALUES (2, 3, 200.75, '2023-02-01', 'Electronics Purchase')");

    db.run("CREATE TABLE contacts (id INT, user_id INT, phone TEXT, email TEXT, address TEXT)");
    db.run("INSERT INTO contacts (id, user_id, phone, email, address) VALUES (1, 2, '123-456-7890', 'user1@example.com', '123 Main St')");
    db.run("INSERT INTO contacts (id, user_id, phone, email, address) VALUES (2, 3, '234-567-8901', 'user2@example.com', '456 Elm St')");
});

module.exports = db;