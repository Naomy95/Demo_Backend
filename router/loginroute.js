const  Router  = require('express'); 
const {create,createProfile,listen}=require('../controller/logincontroller')
const app = Router(); 


app.use(Router.json());

app.get('/',listen)

app.post('/login', create)

app.post('/profile', createProfile)


  
module.exports = app;