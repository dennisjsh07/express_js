// import fs
const fs = require('fs');
// import the path core-module...
const path = require('path');

// import the path from util folder...
const rootDir = require('../util/path');

const products = [];

module.exports = class Product{
    constructor(title){
        this.title = title;
    }

    save(){
        const p = path.join(rootDir, 'data', 'products.json')
        fs.readFile(p,(err,data)=>{
            let products = [];
            if(!err){
                products = JSON.parse(data);
            }
            products.push(this);
            fs.writeFile(p,JSON.stringify(products),(err,data)=>{
                if(err){
                    console.log(err);
                }
            })
        })
    }

    static fetchAll(cb){
        const p = path.join(rootDir, 'data', 'products.json')
        fs.readFile(p,(err,data)=>{
            if(err){
                cb([]);
            }
            cb(JSON.parse(data));
        })
    }
}