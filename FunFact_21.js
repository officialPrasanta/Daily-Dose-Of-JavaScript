// python like zip function

let a = [10, 30, 50];
let b = [20, 40, 60];

function zip(xArr, yArr) {
    let xlen, ylen;
    let t;      // parent array
    let zipped; // zipped array

    xlen = xArr.length;
    ylen = yArr.length;
    //check if both length are equal or not
    if (xlen !== ylen) {
        throw new Error('Error: arrays length must be same');
    }

    // encapsulate arrays
    t = [xArr, yArr];

    //create range generator of size xArr.length
    let range = Array.from(Array(xlen).keys());
    console.log(range);

    zipped = range.map(index => {
        return t.map(col => col[index]);
    })
    return zipped;
}

let zippedArray = zip(a, b);
console.log(zippedArray);