// import express()...
const express = require('express');

// import body-parser...
const bodyParser = require('body-parser');

// import path module...
const path = require('path');

// creating a express applivcation and assinging to a constant...
const app = express();

// adding middlewares...
app.use(bodyParser.urlencoded({extended: false}));

// import css files...
app.use(express.static(path.join(__dirname,'public')));

// import the routes...
const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const helpRoutes = require('./routes/help');

// call the routes...
app.use('/admin',adminRoutes);
app.use('/',shopRoutes);
app.use('/help',helpRoutes)

app.get('/success',(req,res,next)=>{
    res.sendFile(path.join(__dirname, 'views', 'success.html'));
});

// import error controller...
const errorController = require('./controllers/error');

// add 404 error...
app.use(errorController.get404);

// using app.listen for both creating the server and listening to the requests
app.listen(5000);