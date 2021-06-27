// Clouser Property

/****Unsafe****/

// let counter = 0;

// /* Function to increment counter */
// function add() {
//     counter += 1;
// }

// /* Call add() 3 times */

// add();
// add();
// add();


/****Safe****/

/* Function to increment counter */
const add = (function () {
    let counter = 0;
    return function () {
        counter += 1;
        return counter;
    }
})();

/* Call add() 3 times */

add();
add();
add();