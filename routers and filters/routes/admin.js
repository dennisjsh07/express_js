// import express
const express = require('express');

// add router object
const router = express.Router();

router.get('/add-product',(req,res,next)=>{
    res.send('<form action="/admin/add-product" method="POST"><input type="text" name="title"><button type="submit">add-product</button></form>'); // adding the response
});

router.post('/add-product',(req,res,next)=>{
    console.log(req.body)
    res.redirect('/shop');
});

// export routes
module.exports = router;
