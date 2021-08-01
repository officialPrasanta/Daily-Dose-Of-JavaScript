// High Order Functions in JavaScript Array

let primes = [2, 3, 5, 7, 11, 13];



// 1. map
console.log('\n\n***.map() function***\n');
let primeMultiple = primes.map((prime) => prime * 2);
console.log(primeMultiple);



// 2. filter
console.log('\n\n***.filter() function***\n');
let primeAboveSeven = primes.filter((prime) => prime > 7);
console.log(primeAboveSeven);



// 3. forEach
console.log('\n\n***.forEach() method***\n');
//bad example
console.log('bad example:');
let badArray = primes.forEach((prime) => prime * 2);
console.log(badArray);
console.log(primes);

// correct example
console.log('\ncorrect example:');
let res = [];
// a callback function
const multiplyPrime = function (item) {
    this.push(item * 2);
}
// res will act as this
primes.forEach(multiplyPrime, res);
console.log(res);



// 4. reduce
console.log('\n\n***.reduce() method***\n');
let sum = primes.reduce((accumulator, currentValue) => (accumulator + currentValue));
console.log(sum);