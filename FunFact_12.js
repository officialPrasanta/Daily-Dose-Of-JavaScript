// Pin Checker

let aString =
    "Mr. X's Pin no. is 400 001,\
Mr. Y's pin number: 600-006.\
Ms. Z's Pin no. is 40";

// regex literal to find pin code
// let re = /\d{6}|\d{3}(?:\s\d{3})|\d{3}(?:-\d{3})/gm;
let re = /\b\d{3}[\s, -]?\d{3}\b/gm;

let pinArray = aString.match(re);
console.log(pinArray);