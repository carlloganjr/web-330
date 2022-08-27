/* 
================================================================
    Title: bill.js
    Author: Carl Logan
    Date: 8/25/2022
    Description: Holds the Bill class.
================================================================
*/

// Create Bill class and export
export class Bill {

  // Create arrays for menu sections to capture prices
  constructor() {
    this._beverages = [];
    this._appetizers = [];
    this._mainCourses = [];
    this._desserts = [];
  }

  // Push beverage prices to the beverages array
  addBeverage(beverage) {
    this._beverages.push(beverage);
  }  

  // Push appetizer prices to the appetizers array
  addAppetizer(appetizer) {
    this._appetizers.push(appetizer);
  }

  // Push main course prices to the mainCourses array
  addMainCourse(mainCourse) {
    this._mainCourses.push(mainCourse);
  }

  // Push dessert prices to the desserts array
  addDessert(dessert) {
    this._desserts.push(dessert);
  }

  // Add the total from each array to the overall total
  getTotal() {
    let total = 0;

    // Add and parse the total from the array to the total variable
    let beverageTotal = this._beverages.forEach(beverage => {
      total += parseFloat(beverage.price);
    });

    // Add and parse the total from the array to the total variable
    let appetizerTotal = this._appetizers.forEach(appetizer => {
      total += parseFloat(appetizer.price);
    });

    // Add and parse the total from the array to the total variable
    let mainCourseTotal = this._mainCourses.forEach(mainCourse => {
      total += parseFloat(mainCourse.price);
    });

    // Add and parse the total from the array to the total variable
    let dessertTotal = this._desserts.forEach(dessert => {
      total += parseFloat(dessert.price);
    });

    // return the total value for use with two decimal place precision
    return total.toFixed(2);
  }
}