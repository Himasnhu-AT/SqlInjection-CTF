# Sql CTF

This is sample nodejs server, which is vulnerable to SQL injection attacks. using which you have to file flag

## How it'll work:

Their is SQL database, connected to nodejs. theirs an endpoint / which return login form, but it have minimal sanitization abilities. So by writing complex commands, users can get access to database, from their, after login, they'll get Flag and pass CTF challange.