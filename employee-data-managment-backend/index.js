// Imported libraries
const express =require('express');
const app=express(); // Creating an App with Express
const port=5000;
const routes = require('./routes');
const db=require('./config/mongoose');
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});
// routes
app.use('/',routes);
app.use(express.urlencoded()); //Enable us to pass data through URL

app.listen(port,(err)=>{
    if(err){

        console.log('errr',err)
    };
    console.log('Server is running on port :',port);
});