let cricketer = {
    firstName: "Rahul",
    lastName: "Dravid"
}

/***Arrow Function***/

// let printBio = (score) => {
//     console.log("My Favorite Cricketer: ");
//     console.log(this.firstName + " " + this.lastName);
//     console.log("He scores over " + score + " run in ODI.");
// }

// TypeError


/***Regular Function***/

function printBio(score) {
    console.log("My Favorite Cricketer: ");
    console.log(this.firstName + " " + this.lastName);
    console.log("He scores over " + score + " runs in ODI.");
}

printBio.call(cricketer, "10000");

// Works Fine