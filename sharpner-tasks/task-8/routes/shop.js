//import express...
const express = require('express');

// import products controller...
const productsController = require('../controllers/products')

const router = express.Router();

router.get('/',productsController.getProducts); // get logic from the controllers folder...

// import the id...
router.get('/:productId',productsController.getProduct);

module.exports = router;