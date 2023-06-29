// import the path core-module...
const path = require('path');

const express = require('express');

//import the path from util folder...
const rootDir = require('../util/path');

const router = express.Router();

// router.get('/add-product',(req,res,next)=>{
//     res.sendFile(path.join(__dirname, '../', 'views', 'add-product.html')); // adding the response
// });

router.get('/add-product',(req,res,next)=>{
    res.sendFile(path.join(rootDir, 'views', 'add-product.html')); // adding the response
});

router.post('/add-product',(req,res,next)=>{
    console.log(req.body)
    res.redirect('/');
});

module.exports = router;