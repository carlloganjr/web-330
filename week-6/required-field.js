/* 
================================================================
    Title: required-field.js
    Author: Carl Logan
    Date: 9/12/2022
    Description: A module of Future Value App.
================================================================
*/

// check for a string and provide a message
export class RequiredField {
  constructor(name, field) {
    this.name = name;
    this.field = field;
  }

  validate() {
    if(parseFloat(this.field)) {
      return false;
    }

    return true;
  }

  getMessage() {
    return `${this.name} is a required field.`
  }
}
