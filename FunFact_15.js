let a_prime = [2, 3, 5, 7];

// concat long array->need new array variable
let prime1 = a_prime.concat(
    [11, 13, 17, 19, 23,
        29, 31]
);

console.log(prime1);

// [2, 3, 5, 7, 11, 13, 17, 19, 29, 31]


let b_prime = [2, 3, 5, 7];
// no need of new array variable
b_prime.push.apply(b_prime,
    [11, 13, 17, 19, 23, 29, 31]
);

console.log(b_prime);

// [2, 3, 5, 7, 11, 13, 17, 19, 29, 31]