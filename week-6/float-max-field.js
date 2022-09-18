/* 
================================================================
    Title: float-max-field.js
    Author: Carl Logan
    Date: 9/12/2022
    Description: A module of Future Value App.
================================================================
*/

/* the class to check input value */
export class FloatMaxField {
  constructor(name, field, max) {
    this.name = name;
    this.field = field;
    this.max = max;
  }

  validate() {
    return parseFloat(this.field) > parseFloat(this.max);
  }

  getMessage() {
    return `${this.name} must be less than ${this.max}. You entered ${this.field}.`
  }
}