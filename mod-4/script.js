// CALCULATOR

let num1 = Number(prompt("Enter first number: "));
let operator = prompt("Enter operator (+, -, *, /): ");
let num2 = Number(prompt("Enter second number: "));

function add(number1, number2) {
    return number1 + number2;
}

function subtract(number1, number2) {
    return number1 - number2;
}

function multiply(number1, number2) {
    return number1 * number2;
}

function divide(number1, number2) {
    return number1 / number2;
}

let result;

switch (operator) {
    case '+':
        result = add(num1, num2)
        break;
    case '-':
        result = subtract(num1, num2);
        break;
    case '*':
    case 'x':
        result = multiply(num1, num2);
        break;
    case '/':
        result = divide(num1, num2);
        break;
    default:
        console.log('Oops! Something went wrong')
}

console.log(`${num1} ${operator} ${num2} = ${result}`);


// let temperature = 9;

// switch (temperature) {
//     case 10:
//         console.log('Temp is 10')
//         break;
//     case 9:
//         console.log('Temp is 9 or 10');
//         break;
//     case 8:
//         console.log('Temp is 8');
//         break;
//     default: 
//         console.log('Temp is just right');
// }


 
// if (temperature > 30) {
//   console.log("It's too hot!");
// } else if (false) {

// } else {

// }










/*

// Boolean
true;   // boolean literal 

// String
"Hello World";  // string literal
'Hello World';

// template literal
`Hello World`;

// Numbers
30;

// Variables
let firstName = "bob";
firstName = "billy";

// console.log method
// console.log(firstName);

// camel case (naming convention)

let message = `Hello, they call me "${firstName}". That's not my name!`;
let message2 = 'Hello, they call me "' + firstName + '". That\'s not my name!'

// console.log(message);
// console.log(message2);

// normal string
// 'Hello, they call me \"billy\". Thats not my name!'

1 + 1;
1 - 1;
1 / 1;
2 * 2;

// functions

// function declaration
function greeting(name) { // <-- name is the parameter
    console.log('running greeting function declaration...');
    return "Hello " + name; 
}

// function expression
let greeting2 = function() {
    console.log('running greeting function expression...');
    console.log(message2);
}

// arrow function
let greeting3 = () => {
    console.log('running greeting arrow function...');
    console.log(message2);
}

// run the function (or call, invoke)
greeting("Bob") // <-- "Bob" is the argument 
greeting2()

console.log(greeting("Bob")); // <-- result is "Hello Bob"


let randomNumber = Math.random();

console.log(randomNumber);

let inputtedName = prompt("What is your name?");

console.log(inputtedName)

*/