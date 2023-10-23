const express = require('express')
const routes = express.Router();

const registerController = require('../controller/regiserController');

routes.get('/',registerController.index);
routes.get('/addProduct',registerController.addProduct);
routes.post('/insertData',registerController.insertData)


module.exports = routes;