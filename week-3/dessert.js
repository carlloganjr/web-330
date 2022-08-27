/* 
================================================================
    Title: dessert.js
    Author: Carl Logan
    Date: 8/25/2022
    Description: Holds the Dessert class.
================================================================
*/

import {Product} from "./product.js";

export class Dessert extends Product {
  constructor(name, price) {
    super(name, price);
  }
}