/* 
================================================================
    Title: shopping-cart.js
    Author: Carl Logan
    Date: 9/5/2022
    Description: A module of Bob's Auto Repair Cart .
================================================================
*/

// Shopping cart class for tracking products and creating orders
export class ShoppingCart {
    constructor() {
        this.products = [];
    }

    // track the total orders
    count() {
        return this.products.length;
    }

    // add products to the local array
    add(product) {
        this.products.push(product);
    }

    // generate a list of products
    * listProducts() {
        for(let product of this.products) {
            yield product;
        }
    }
}