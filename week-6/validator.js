/* 
================================================================
    Title: validator.js
    Author: Carl Logan
    Date: 9/12/2022
    Description: A module of Future Value App.
================================================================
*/

import {RequiredField} from "./required-field.js";
import {FloatField} from "./float-field.js";
import {FloatMinField} from "./float-min-field.js";
import {FloatMaxField} from "./float-max-field.js";

// validate the information being presented
export class Validator {
  constructor(name, field) {
    this.validators = [];
    this.messages = [];
    this.name = name;
    this.field = field;
  }

  // check if the field is required
  addRequiredField() {
    this.validators.push(new RequiredField(this.name, this.field));
  }

  // check if a non-string if required
  addRequiredFloatField() {
    this.validators.push(new FloatField(this.name, this.field));
  }

  // check the minimum value
  addFloatMinField(min) {
    this.validators.push(new FloatMinField(this.name, this.field, min));
  }

  // check the maximum value
  addFloatMaxField(max) {
    this.validators.push(new FloatMaxField(this.name, this.field, max));
  }

  // check all validation objects
  validate() {
    for(let valid of this.validators) {
      if(valid.validate()) {
        this.messages.push(valid.getMessage());
        return false;
      }
    }
    return true;
  }
}

