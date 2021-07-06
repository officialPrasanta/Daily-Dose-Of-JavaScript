// Range Generator

function range(stop, start, step) {
    start = (typeof start === 'undefined') ? 0 : start;
    step = (typeof step === 'undefined') ? 1 : step;
    return Array.from({ length: (stop - start) / step }, (_, index) => start + (index * step));
}

console.log(range(10, 0, 1));
console.log(range(10));