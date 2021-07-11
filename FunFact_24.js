Function.prototype.params = function () {
    console.log('params: ', this.length);
}

function multiplication(a, b) {
    return a * b
}

// call params funcntion
multiplication.params();

//another function
function sum(a, b, c) {
    return a + b + c;
}

// call params function
sum.params();