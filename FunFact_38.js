
console.log('***Splice Example:***\n');
/*
* splice() in JavaScript: An array class method;
* change input array by removing or replacing array elements
*
* syntax: array.splice(start, deleteCount, item1..., itemN);
*
* start:  index at which to start changing the array.
*
* deleteCount: number of elements in the array to remove from start
*
* item1...itemN: The elements to add to the array, beginning from start
*
*/
let removed;
let inserted;

// Example: 1: remove element from first 2 places
console.log('example 1:');
let arr1 = [2, 4, 5, 7];
removed = arr1.splice(0, 2);
console.log('Removed: ', removed); // [2, 4]
console.log('arr1: ', arr1); // [5, 7]


// Example 2: remove element from last 2 places
console.log('\nexample 2:');
let arr2 = [3, 5, 6, 8];
removed = arr2.splice(-2);
console.log('removed: ', removed); // [6, 8]
console.log('arr2: ', arr2); // [3, 5]


// Example 3: insert element
console.log('\nexample 3:');
let arr3 = [3, 5, 13, 17];
inserted = arr3.splice(2, 0, 7, 11);
console.log(inserted); // []
console.log('arr3: ', arr3); // [3, 5, 7, 11, 13, 17]



console.log('\n\n***Slice Example:***\n');
/*
* slice() in JavaScript: An array and string class method;
* doesn't change input. Returns a new copy.
*
* syntax: array.slice(start, end);
*
*/

let slicedFib;
let slicedWord;

// Example 1
console.log('example 1:');
let fib = [1, 1, 2, 3, 5, 8];
slicedFib = fib.slice(0, 4);
console.log('silcedFib: ', slicedFib); // [ 1, 1, 2, 3 ]
console.log('fib: ', fib); // [ 1, 1, 2, 3, 5, 8 ]


// Example 2
console.log('\nexample 2:');
let twoWords = "Inhale Exhale";
slicedWord = twoWords.slice(7, twoWords.length);
console.log('silcedWord: ', slicedWord); // Exhale
console.log('twoWords: ', twoWords); //  Inhale Exhale


console.log('\n\n***Split Example:***\n');
/*
* split() in JavaScript: A string class method;
* doesn't change input string. Splits a string by separator and returns it into a new array.
* syntax: string.split(separator, limit);
*/

let quotes = "Inhale-Exhale";
let splitArr = quotes.split("-"); // separator --> "-"
console.log('splitArr: ', splitArr); // [Inhale, Exhale]
console.log('Quotes: ', quotes); // Inhale-Exhale
