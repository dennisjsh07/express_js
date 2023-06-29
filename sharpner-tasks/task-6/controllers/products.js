// import the path core-module...
const path = require('path');

//import the path from util folder...
const rootDir = require('../util/path');

exports.getAddProducts = (req,res,next)=>{
    res.sendFile(path.join(rootDir, 'views', 'add-product.html')); // adding the response
}

exports.postAddProducts = (req,res,next)=>{
    console.log(req.body)
    res.redirect('/');
}

exports.getProducts = (req,res,next)=>{
    res.sendFile(path.join(rootDir, 'views', 'shop.html')); // adding the response
}