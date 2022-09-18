/* 
================================================================
    Title: float-field.js
    Author: Carl Logan
    Date: 9/12/2022
    Description: A module of Future Value App.
================================================================
*/

/* the class to check input value */
export class FloatField {
  constructor(name, field) {
    this.name = name;
    this.field = field;
  }

  validate() {
    return isNaN(parseFloat(this.field));
  }

  getMessage() {
    return `${this.name} must be a float value. You entered ${this.field}`
  }
}