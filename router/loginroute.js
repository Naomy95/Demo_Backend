const { Router } = require('express');
const {listen,create,createProfile}=require('../controller/logincontroller')
const app = Router(); 


app.get('/',listen)

app.post('/login', create)

app.post('/profile', createProfile)


  
module.exports = app;