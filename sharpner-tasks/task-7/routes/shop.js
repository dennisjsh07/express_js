// import the path core-module...
const path = require('path');

const express = require('express');

//import the path from util folder...
const rootDir = require('../util/path');

const router = express.Router();

// router.get('/',(req,res,next)=>{
//     res.sendFile(path.join(__dirname, '../', 'views', 'shop.html')); // adding the response
// });

// import products controller...
const productsController = require('../controllers/products')

router.get('/',productsController.getProducts);

module.exports = router;