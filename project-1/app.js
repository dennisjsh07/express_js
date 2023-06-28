// using express...

// import express...
const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');

// creating a express application...
const app = express();

// adding body-parser.
app.use(bodyParser.urlencoded({extended: false}));

// add middlewares.
app.get('/',(req,res,next)=>{
    fs.readFile('message.txt',{encoding: 'utf-8'},(err,data)=>{
        if(err){
            console.log(err);
            data = 'No chat exists';
        }
        res.send(
            `${data}
            <form action="/" method="POST" onSubmit="document.getElementById('username').value = localStorage.getItem('username')">
                <input type="text" id="message" name="message">
                <input type="hidden" id="username" name="username">
                <button type="submit">send</button>
            </form>`
        );
    })
});

app.post('/',(req,res,next)=>{
    console.log(req.body.message);
    console.log(req.body.username);
    fs.writeFile('message.txt',`${req.body.username}: ${req.body.message}`,{flag: 'a'},(err)=>{
        if (err){
            console.log(err);
        }
        res.redirect('/');
    })
});

app.get('/login',(req,res,next)=>{
    res.send(
    `<form action="/login" method="POST" onSubmit="localStorage.setItem('username',document.getElementById('username').value)">
        <input type="text" id="username" name="username">
        <button type="submit">login</button>
    </form>`);
});

app.post('/login', (req, res, next) => {
    res.redirect('/');
  });

// create server...
app.listen(4000);

