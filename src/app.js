const express = require('express');
const setRoutes = require('./routes/index');

const app = express();
const port = 3000;

// Set up the routes
setRoutes(app);

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});