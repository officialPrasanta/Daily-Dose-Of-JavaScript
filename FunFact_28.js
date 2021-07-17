//string to array
let string = "JAVASCRIPT";

// way: 1
let arr1 = Array.from(string);
console.log(`way1: [${arr1}]\n`);

console.log(string, '\n');

// way: 2
let arr2 = string.split("");
console.log(`way2: [${arr2}]`);

