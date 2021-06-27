// good and bad way of passing parameters to a function

// Wrong way
function add(a, b, c, d) {
    return a + b + c + d
}
let res = add(1, 2, 5, 9);
console.log(res);

// 17


// Good Way: rest parameter
function add(...params) {
    let sum = 0;
    let len = params.length;
    for (let i = 0; i < len; i++) {
        sum = sum + params[i];
    }
    return sum;
}
let res = add(1, 2, 5, 9);
console.log(res);

// 17