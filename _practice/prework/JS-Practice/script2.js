let arr = [
    { name: 'bob', age: 50 }, 
    { name: 'billy', age: 15 }, 
    { name: 'sally', age: 40 }
]
console.log('filter:')

// removing elements based off the condition
let filteredArr = arr.filter((person) => {
    return person.age >= 18
})


// let array = [
//     {
//         name: 'bob',
//         age: 50
//     }, 
//     {
//         name: "billy"
//     }, {}, {}, {}]

// const test = array.map((obj) => {
//     const card = document.createElement('div');
//     card.textContent = obj.name
//     return card
// })
// console.log(test);
// console.log(array);

// [<div>bob</div>, <div>billy</div>]


// map    [2, 4, 6, 8]


// loops over the array and changes each element 
const result2 = arr.map((num) => {
    // checking if the number is even
    if (num % 2 === 0) {
        return num * 2
    }
    return num
})

// console.log(result2);



arr.map(function(num) {
    return num * 2
})



console.log('LOOPS:')



let twoDeeArr = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 5, 3]
]

for (let i = 0; i < twoDeeArr.length; i++) {
  let nestedArr = twoDeeArr[i];

  for (let j = 0; j < nestedArr.length; j++) {
    let number = nestedArr[j];
    console.log(number)
  }
}


// outer loop
for (let i = 0; i <= 1; i++) {
    console.log('i: ' + i)
    // inner loop
    for (let j = 0; j <= 1; j++) {
        console.log('j: ' + j)
    }
}

console.log('done')

// 1. declare and initialize i (0)
// 2. check the outer loop condition (true) (0 <= 1)
// 3. console log the variable i (0)
// 4. declare and initialize j (0)
// 5. check the inner loop condition (true) (0 <= 1)
// 6. console log the variable j (0)
// 7. increment j (1) 
// 8. check the inner loop condition (true) (1 <= 1)
// 9. console log the variable j (1)
// 10. increment j (2)
// 11. check the inner loop condition (false) (2 <= 1)
// 12. increment i (1)
// 13. check the outer loop condition (true) (1 <= 1)
// 14. console log the variable i (1)
// 15. declare and initialize j (0)
// 16. check the inner loop condition (0 <= 1)
// 17. console log the variable j (0)
// 18. increment j (1)
// 19. check the inner loop condition (true) (1 <= 1)
// 20. console log the variable j (1)
// 21. increment j (2)
// 22. check the inner loop condition (false) (2 <= 1)
// 23. increment i (2)
// 24. check the outer loop condition (false) (2 <= 1)
// 25. console log "done"








console.log('done')
// when we encounter the for loop...

// 1. declare and initialize i (1)
// 2. check the condition (true) (1 <= 5)
// 3. console log the variable i (1)
// 4. increment i (2)
// 5. check the condition (true) (2 <= 5)
// 6. console log the variable i (2)
// 7. increment i (3)
// 8. check the condition (true) (3 <= 5)
// 9. console log the variable i (3)
// 10. increment i (4)
// 11. check the condition (true) (4 <= 5)
// 12. console log the variable i (4)
// 13. increment i (5)
// 14. check the condition (true) (5 <= 5)
// 15. console log the variable i (5)
// 16. increment i (6)
// 17. check the condition (false) (6 <= 5)
// 18. console log "done"


// let i = 1; // initialization
// while (i <= 5) { // condition
//   console.log(i);
//   i++; // increment/decrement
// }



console.log('ARRAYS:')


// Exercise 1
// Create a function that takes in an integer. This function should 
// return the given integer + 7 if the integer is less than 10. 
// If the integer is greater than or equal to 10, it should 
// return the given integer - 3. 
// The name of the function should be addOrSubtract.

function addOrSubtract(number = 10) {
    if (number < 10) {
        return number + 7
    } else if (number >= 10) {
        return number - 3
    }
}

let result = addOrSubtract()

// console.log(result);


// Exercise 2
// Write a function, named multiply, that takes two parameters and returns 
// their product. Use arrow function syntax to implicitly return the result.

const multiply = (a, b) => a * b;

let product = multiply(3, 3);

// console.log(product);


// Exercise 3
// Write a function, named capitalize, that takes a string as a parameter 
// and returns a new string with the first letter capitalized. 
// Use string methods to accomplish this.

function capitalize(str) {
    return str.substring(0, 1).toUpperCase() + str.substring(1)
}

// console.log(capitalize("time to go"));

// Exercise 4
// Write a function, named lastLetter, that takes a string as a parameter 
// and returns the last letter of the string. Use string methods to accomplish this.

function lastLetter(str) {
    return str.slice(-1);
}

let letter = lastLetter("apple");

// console.log(letter);


const fruits = ['apple', 'banana', 'orange', 'pear', 'grapes'];

// console.log(fruits.length)

// first element
console.log(fruits[0])

// last element
console.log(fruits[fruits.length - 1])

// out of bounds
console.log(fruits[99])

const newLength = fruits.push('pineapple', 'plum', 'orange')

console.log(fruits.length);

const lastElement = fruits.pop();

console.log(lastElement);

console.log(fruits);

fruits.push(lastElement);

console.log(fruits);

// splice(startingIndex, deleteCount, newElement)
fruits.splice(0, 1, "kiwi", "pears", "orange");

console.log(fruits);

// slice(startingIndex, endingIndex)
console.log(fruits.slice(-3))

let greeting = "Hello World";

// split (string method) (turns a string into array)
let splitGreeting = greeting.split(" ")

console.log(splitGreeting)

let hello = splitGreeting[0] // "Hello"
let world = splitGreeting[1] // "World"

// array destructuring
// let [ hello, world ] = splitGreeting

console.log(hello);
console.log(world);

// join (array method) (turns an array into a string)
console.log(splitGreeting.join(" "))