const express = require('express');
const IndexController = require('../controllers/index');

function setRoutes(app) {
    const router = express.Router();
    const indexController = new IndexController();

    router.get('/', indexController.getIndex);
    router.post('/login', express.urlencoded({ extended: true }), indexController.postLogin);

    app.use('/', router);
}

module.exports = setRoutes;