// import the path core-module...
const path = require('path');

// import the path from util folder...
const rootDir = require('../util/path');

// import the model folder...
const Product = require('../models/product');

exports.getAddProducts = (req,res,next)=>{
    res.sendFile(path.join(rootDir, 'views', 'add-product.html')); // adding the response
}

exports.postAddProducts = (req,res,next)=>{
    console.log(req.body)
    // add objects...
    const product = new Product(req.body.title);
    product.save();
    res.redirect('/');
}

exports.getProducts = (req,res,next)=>{
    res.sendFile(path.join(rootDir, 'views', 'shop.html')); // adding the response
    // fetching all the products...
    Product.fetchAll((products)=>{
        console.log(products);
    }); 
}

exports.getProduct = (req,res,next)=>{
    const prodId = req.params.productId;
    // console.log(prodId);
    Product.findById(prodId,(product)=>{
        console.log(product);
    })
}


