const express = require('express'); 
const cors = require('cors');
require('dotenv').config();

// const login = require('./router/loginroute'); 
const port=process.env.PORT || 5000  


const corsOptions ={
    origin:'*', 
    credentials:true,  
              //access-control-allow-credentials:true
     methods: [
                'GET',
                'POST',
                'PUT',
                'DELETE'
              ],
    optionSuccessStatus:200
}

const app = express(); 

app.use(cors(
   corsOptions
));
app.use(express.json());

// app.use(login); 
app.get('/', (req, res) => {        //get requests to the root ("/") will route here
    res.send("user");      //server responds by sending the index.html file to the client's browser
                                                        //the .sendFile method needs the absolute path to the file, see: https://expressjs.com/en/4x/api.html#res.sendFile 
});



  
app.listen(port, () => { 

    console.log(`listening on :${port}`); 
});