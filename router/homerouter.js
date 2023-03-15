const express = require('express');
const app = express();
  
app.get('/', (req, res) => {
    res.send("Demo");
});
  
module.exports = app;