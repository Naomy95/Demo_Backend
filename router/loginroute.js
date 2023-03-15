const  express  = require('express'); 
// const {create,createProfile,listen}=require('../controller/logincontroller')
const app = express(); 


app.use(express.json());

app.get('/',listen)

// app.post('/login', create)

// app.post('/profile', createProfile)


  
module.exports = app;