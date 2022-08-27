/* 
================================================================
    Title: beverage.js
    Author: Carl Logan
    Date: 8/25/2022
    Description: Holds the Beverage class.
================================================================
*/

// import the Product class
import {Product} from "./product.js";

// export the Beverage class and inherit from the Product class
export class Beverage extends Product {
  constructor(name, price) {
    super(name, price);
  }
}