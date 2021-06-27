// Two example of Array.prototype.flat Function

let arr1 = [3, 6, 7, [4, [6, 8]]];
console.log(arr1.flat(Infinity));

// [3, 6, 7, 4, 6, 8]

let arr2 = [2, 6, 4, , 7];
console.log(arr2.flat());

// [2, 6, 4, 7]