// currying in JavaScript

let avg = function (...args) {
    return args.reduce((a, b) => (a + b)) / args.length;
}

let curryFunction = function (fx) {
    return function (...argN) {
        return function (...argM) {
            return fx.apply(this, argN.concat(argM));
        }

    }
}

let calcAvg = curryFunction(avg);

let res = calcAvg(2, 4, 6, 4)(20, 40, 60, 40);

console.log(res);