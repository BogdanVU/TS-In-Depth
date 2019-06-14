/// <reference path='utility-functions.ts' />
var books = Utility.maxBookAllowed(28);
console.log(books);
var util = Utility.Fees;
var fee = util.calculateLateFee(10);
console.log(fee);
