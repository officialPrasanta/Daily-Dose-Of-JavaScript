// 3 useful tricks in javascript array operations

// 1. find max/ min in array

let arr = [4, 7, 8, 1, 3];
let max;

// Wrong approach
max = Math.max(arr);
console.log(max);
// O.P: NaN

// Correct approach
max = Math.max(...arr);
console.log(max);
// O.P: 8


// 2. delete items from array

let arr2 = [5, 6, 10, -3, 9];
console.log('arr2 length (before delete): ', arr2.length);  // 5
let index = 3;      // delete item at index

// Wrong approach
delete arr2[index];
console.log(arr2);
console.log('arr2 length (after delete): ', arr2.length);  // 5

// Correct approach
arr2.splice(3, 1);
console.log(arr2);
console.log('arr2 length (after delete): ', arr2.length);  // 4


// 3. loop through array element

let arr3 = [4, 6, 9, 10];

// Boring approach
console.log('boring appraoch:');
for (let i = 0; i < arr3.length; i++) {
    console.log(arr3[i]);
}

// Attractive appraoch
console.log('attractive appraoch:');
arr3.map((element) => console.log(element));