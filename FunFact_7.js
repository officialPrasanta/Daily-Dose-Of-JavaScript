// A good way of handling error in code
let people = [
    {
        firstName: "Ekansh",
        lastName: "Pathak"
    }
];

let findPerson = people.find(person => {
    return person.firstName === "Bhumi";
}) || {};

console.log(findPerson);

// O/P: {}