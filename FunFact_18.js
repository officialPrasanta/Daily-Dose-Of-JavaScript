let arr = [10, 20, 30, 40, 50, 60];
arr.push(70);
console.log(`current arr: [${arr}]`);

// seal the array
Object.seal(arr);

arr.push(80);
//TypeError: Cannot add property 7