// adding different paths and body parser using express...

// import core node http...
const http = require('http');

// import express()...
const express = require('express');

// import body-parser...
const bodyParser = require('body-parser');

// creating a express applivcation and assinging to a constant...
const app = express();

// adding middlewares...
app.use(bodyParser.urlencoded({extended: false}));

app.use('/add-product',(req,res,next)=>{
    res.send('<form action="/product" method="POST"><input type="text" name="title"><button type="submit">add-product</button></form>'); // adding the response
});

app.post('/product',(req,res,next)=>{
    console.log(req.body)
    res.redirect('/');
});

app.use('/',(req,res,next)=>{
    res.send('<h1>hello world!!!</h1>'); // adding the response
});

// using app.listen for both creating the server and listening to the requests
app.listen(5000);