/* 
================================================================
    Title: appetizer.js
    Author: Carl Logan
    Date: 8/25/2022
    Description: Holds the Appetizer class.
================================================================
*/

// import the Product class
import {Product} from "./product.js";

// export the Appetizer class and inherit from the Product class
export class Appetizer extends Product {
  constructor(name, price) {
    super(name, price);
  }
}