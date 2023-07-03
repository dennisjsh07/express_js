const fs = require('fs');
const path = require('path');

const p = path.join(rootDir, 'data', 'cart.json');


module.exports = class cart {
    static addProduct(id, productPrice){
        // 1) fetch the previous car.
        fs.readFile(p,(err,data)=>{
            // add new cart
            let cart={
                products: [],
                totalPrice: 0
            }
            if(err){
                console.log(err);
            }
            else{
                cart = JSON.parse(data);
            }
        });

        // 2) analyse the cart => find the existing product.
        const existingProductsIndex = cart.products.findIndex(prod => prod.id === id);
        const existingProduct = cart.products[existingProductIndex];
        let updatedProduct;
       
        // add new product/ increase quantity.
        if(existingProducts){
            updatedProduct = { ...existingProducts};
            updatedProduct.qty = updatedProduct+1;
            cart.products = [ ...cart.products];
            cart.products[existingProductsIndex] = updatedProduct;
        }
        else{
            updatedProduct = {
                id: id, 
                qty:1
            }
            cart.products = [ ...cart.products, updatedProduct]
        }
        cart.totalPrice = cart.totalPrice + productPrice;
        fs.writeFile(p, JSON.stringify(cart),(err)=>{
            console.log(err);
        })
    }
}