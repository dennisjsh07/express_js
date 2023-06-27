// import the node_js core module....
const http = require('http');

// import express...
const express = require('express');

// creating a express applicationa and assign it to a constant.
const app = express();

app.use((req,res,next)=>{
    console.log("in the middleware");
    next(); // allows the request to continue to next middlewear....
});

app.use((req,res,next)=>{
    console.log("in the another middleware");
    res.send({key: "value"}); // sending the response...
});

// 1) ctreate server...
// const server = http.createServer(app);

// 2) listen to the server.
// server.listen(4000);

// the above 2 methods can be replaced by app.listen function.
app.listen(4000);



