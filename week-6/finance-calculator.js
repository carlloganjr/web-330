/* 
================================================================
    Title: finance-calculator.js
    Author: Carl Logan
    Date: 9/12/2022
    Description: A module of Future Value App.
================================================================
*/

/* the class that will do all the calculations */
export class FinanceCalculator {
  static MONTHS_IN_YEAR = 12;

  static calculateFutureValue(monthlyPayment, rate, years) {
    const months = years * this.MONTHS_IN_YEAR;
    const interestRate = 1 + rate / 100;
    const presentValue = monthlyPayment * months;
    const futureValue =  presentValue * (Math.pow(interestRate, months));

    return futureValue;
  }

  static convertToCurrency(field) {
    const currencyFormatter = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD"
    });

    return currencyFormatter.format(field);
  }

}