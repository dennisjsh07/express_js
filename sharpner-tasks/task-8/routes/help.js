//help.js

const path = require('path');
const express = require('express');
const rootDir = require('../util/path');
const router = express.Router();

// router.get('/contact-us',(req,res,next)=>{
//     res.send(`
//     <form action"/help/contact-us" method="POST">
//         <input type="text" name="name">
//         <input type="text" name="email">
//         <button type="submit">send</button>
//     </form>
//     `)
// });

// router.get('/contact-us',(req,res,next)=>{
//     res.sendFile(path.join(__dirname, '../', 'views', 'help.html'));
// });

router.get('/contact-us',(req,res,next)=>{
    res.sendFile(path.join(rootDir, 'views', 'help.html'));
});

router.post('/contact-us',(req,res,next)=>{
    console.log(req.body.name);
    console.log(req.body.email);
    res.redirect('/success');
});

module.exports = router;