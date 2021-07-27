// shuffle an array
let arr = [2, 13, 5, 9, 10];

console.log(arr);

let shuffle = function (array) {
    return array.sort(() => {
        return Math.random() - 0.5;
    });
}

console.log(shuffle(arr));
