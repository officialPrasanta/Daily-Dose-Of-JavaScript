// Application of reduce method
let fruits = [
    {
        name: "avocado",
        price: 90,
        quantity: 3
    },
    {
        name: "kiwi",
        price: 100,
        quantity: 2
    }
];
let subTotal = fruits.map((fruit) => fruit.price * fruit.quantity);
let grossTotal = subTotal.reduce((i, j) => (i + j));
console.log('Gross Total: ' + grossTotal + ' Rs.');