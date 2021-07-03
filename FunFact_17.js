let cricketer = {
    firstName: 'Rahul',
    lastName: 'Dravid'
}

function printBio(run, centuries) {
    console.log(this.firstName + " " + this.lastName + ".");
    console.log("He scores " + run + " runs and " + centuries + " centuries in ODI");
}

//call method
printBio.call(cricketer, "10000", "12");

//apply method
printBio.apply(cricketer, ["10000", "12"]);

//bind method : creates a copy of the actual method
let printCricketerBio = printBio.bind(cricketer, "10000", "12");
printCricketerBio();