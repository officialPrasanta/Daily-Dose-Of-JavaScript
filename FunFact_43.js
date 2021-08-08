// Creating immutable objects in JavaScript

// 1st way
let chessGame1 = {
    title: "Fool's Mate",
    white: "player1",
    black: "player2",
    moves: ["1.g4 e6", "2.f4?? Qh4#"]
};

let isExtensible = Object.isExtensible(chessGame1);    // true

if (isExtensible) {
    Object.preventExtensions(chessGame1);
}

isExtensible = Object.isExtensible(chessGame1);
console.log(isExtensible);     // false



// 2nd way
let chessGame2 = {
    title: "trap the Queen",
    white: "Gibaud",
    black: "Lazard",
    moves: ["1.d4 Nf6", "2.Nd2 e5", "3.dxe5 Ng4", "4.h3 Ne3"]
};

let isSealed = Object.isSealed(chessGame2);    // false
if (isSealed === false) {
    Object.seal(chessGame2);
}

isSealed = Object.isSealed(chessGame2);
console.log(isSealed);     // true




// 3rd way
let chessGame3 = {
    title: "trap the Bishop",
    white: "Player1",
    black: "Player2",
    moves: ["1.d4 Nf6", "2.Bg5 c6", "3.e3 Qa5+"]
};


let isFrozen = Object.isFrozen(chessGame3);    // false
if (isFrozen === false) {
    Object.freeze(chessGame3);
}

isFrozen = Object.isFrozen(chessGame3);
console.log(isFrozen);     // true
