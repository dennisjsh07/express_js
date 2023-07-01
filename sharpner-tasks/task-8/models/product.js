// import fs...
const fs = require('fs');
// import the path core-module...
const path = require('path');

// import the path from util folder...
const rootDir = require('../util/path');

const p = path.join(rootDir, 'data', 'products.json');


// create a helper function and store fetchAll inside it.
const getProductsFromFile = (cb)=>{
    fs.readFile(p,(err,data)=>{
        if(err){
            cb([]);
        }
        else{
            cb(JSON.parse(data));
        }
    })
}

const products = [];

module.exports = class Product{
    constructor(title){
        this.title = title;
    }

    save(){
        this.id = Math.random().toString();
        getProductsFromFile((products)=>{
            products.push(this);
            fs.writeFile(p,JSON.stringify(products),(err,data)=>{
                if(err){
                    console.log(err);
                }
            })
        });
    }
 
    // fetching all items...
    static fetchAll(cb){
        getProductsFromFile(cb);
    }

// fetching a single product corrosponding to id...
    static findById(id,cb){
        getProductsFromFile((products)=>{
            const product = products.find((p)=>p.id === id);
            cb(product);
        });
    }
}