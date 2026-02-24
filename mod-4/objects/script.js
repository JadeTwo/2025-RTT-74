let person = {
  'cool property': 'so cool',
  firstName: "John",
  lastName: "Doe",
  age: 30,
  greet() {
    console.log("Hello, my name is " + this.firstName + " " + this.lastName);
  },
  friends: [
    { 
        firstName: "Bob",
        age: 50
    }
  ]
};

console.log(person.friends[0]["firstName"]) // "Bob"


let property = "firstName"

// dot notation
console.log(person.firstName)

// bracket notation
console.log(person['cool property'])

person.greet();

console.log();

let str = "hello world";

let array = [1,2,3]

array.push();

str.toUpperCase();

let chair = {
    legs: 4,
    cushion: true,
    roll: function () {
        console.log('They see me rolling...');
    }, 
}