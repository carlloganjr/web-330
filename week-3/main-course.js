/* 
================================================================
    Title: main-course.js
    Author: Carl Logan
    Date: 8/25/2022
    Description: Holds the MainCourse class.
================================================================
*/

import {Product} from "./product.js";

export class MainCourse extends Product {
  constructor(name, price) {
    super(name, price);
  }
}