let array = [2, 3, 5, 7];

// even function
let even = (element) => element % 2;

isEvenPresent = array.some(even);
console.log(isEvenPresent);    // true