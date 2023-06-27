// import express...
const express = require('express');

// adding router object
const router = express.Router();

router.get('/',(req,res,next)=>{
    res.send('<h1>hello world!!!</h1>'); // adding the response
});

// exporting shop.js
module.exports = router;