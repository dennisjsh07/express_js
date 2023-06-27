// // import core node http...
// const http = require('http');

// // import route.js
// const routes = require('./routes.js');

// // create server...
// const server = http.createServer(routes);

// // listen to server...
// server.listen(5000);

//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// // using express...
// // import core node http...
// const http = require('http');

// // import express()...
// const express = require('express');

// // creating a express applivcation and assinging to a constant...
// const app = express();

// // adding middlewares
// app.use((req,res,next)=>{
//     console.log("in the middleware");
//     next(); // so that it goes to the next function, else there sg=hould be a response else the request will die there.
// })

// app.use((req,res,next)=>{
//     console.log("inside another middleware");
//     res.send({key: "value"}); // adding the response
// })

// // using app.listen for both creating the server and listening to the requests
// app.listen(5000);

//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

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