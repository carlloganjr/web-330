/* 
================================================================
    Title: float-min-field.js
    Author: Carl Logan
    Date: 9/12/2022
    Description: A module of Future Value App.
================================================================
*/

/* the class to check input value */
export class FloatMinField {
  constructor(name, field, min) {
    this.name = name;
    this.field = field;
    this.min = min;
  }

  validate() {
    return parseFloat(this.field) < parseFloat(this.min);
  }

  getMessage() {
    return `${this.name} must be more than ${this.min}. You entered ${this.field}.`
  }
}