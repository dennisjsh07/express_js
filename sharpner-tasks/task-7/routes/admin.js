const express = require('express');

const router = express.Router();

// router.get('/add-product',(req,res,next)=>{
//     res.sendFile(path.join(__dirname, '../', 'views', 'add-product.html')); // adding the response
// });

// import products controller...
const productsController = require('../controllers/products');

router.get('/add-product', productsController.getAddProducts);

router.post('/add-product',productsController.postAddProducts);

module.exports = router;