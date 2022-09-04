/* 
================================================================
    Title: food-model.js
    Author: Carl Logan
    Date: 8/30/2022
    Description: Holds the FoodModel class.
================================================================
*/

// The FoodModel class sets up a temple for food and calories
// This class is exported for use as a module
export class FoodModel {
  constructor(id, name, calories) {
    this.id = id;
    this.name = name;
    this.calories = calories;
  }
}