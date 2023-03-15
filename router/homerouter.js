const { Router } = require('express');
 const {listen} = require('../controller/homecontroller')

const app = Router();
app.get('/', listen);
  
module.exports = app;