/* 
================================================================
    Title: bill.js
    Author: Carl Logan
    Date: 8/25/2022
    Description: Holds the Bill class.
================================================================
*/

export class Bill {
  constructor() {
    this._beverages = [];
    this._appetizers = [];
    this._mainCourses = [];
    this._desserts = [];
  }

  addBeverage(beverage) {
    this._beverages.push(beverage);
  }  

  addAppetizer(appetizer) {
    this._appetizers.push(appetizer);
  }

  addMainCourse(mainCourse) {
    this._mainCourses.push(mainCourse);
  }

  addDessert(dessert) {
    this._desserts.push(dessert);
  }

  getTotal() {
    let total = 0;

    let beverageTotal = this._beverages.forEach(beverage => {
      total += parseFloat(beverage.price);
    });

    let appetizerTotal = this._appetizers.forEach(appetizer => {
      total += parseFloat(appetizer.price);
    });

    let mainCourseTotal = this._mainCourses.forEach(mainCourse => {
      total += parseFloat(mainCourse.price);
    });

    let dessertTotal = this._desserts.forEach(dessert => {
      total += parseFloat(dessert.price);
    });
  }
}