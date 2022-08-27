/* 
================================================================
    Title: appetizer.js
    Author: Carl Logan
    Date: 8/25/2022
    Description: Holds the Appetizer class.
================================================================
*/

import {Product} from "./product.js";

export class Appetizer extends Product {
  constructor(name, price) {
    super(name, price);
  }
}