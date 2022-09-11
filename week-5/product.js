/* 
================================================================
    Title: product.js
    Author: Carl Logan
    Date: 9/5/2022
    Description: A module of Bob's Auto Repair Cart .
================================================================
*/

// Create and export the Product class
export class Product {

    // Set the initial properties for the Product class include a random id
    constructor(name, price) {
        this.name = name;
        this.price = price;
        this.id = Math.random().toString(16).slice(2);
    }
}