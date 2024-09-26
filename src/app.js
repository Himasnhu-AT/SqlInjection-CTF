const express = require('express');
const IndexController = require('./controllers/index');
const setRoutes = require('./routes/index');

const app = express();
const port = 3000;

// Create an instance of the IndexController
const indexController = new IndexController();

// Set up the routes
setRoutes(app, indexController);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});