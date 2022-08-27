/* 
================================================================
    Title: beverage.js
    Author: Carl Logan
    Date: 8/25/2022
    Description: Holds the Beverage class.
================================================================
*/

import {Product} from "./product.js";

export class Beverage extends Product {
  constructor(name, price) {
    super(name, price);
  }
}