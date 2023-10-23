const express = require('express');
const port = 9090;
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname,'/public')))

const mongoose = require('./config/dataBase');

app.use('/',require('./routes'))

app.use(express.urlencoded());
app.set('view engine','ejs');

app.listen(port, (err)=>{
    if(err){
        console.log("server is not start...!");
    }
    console.log("server is start...! At "+port);
})