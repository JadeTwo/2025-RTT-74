let numbers = [10,5,3,15,7]

console.log('for loop:')
for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i])
}

console.log('for of loop...')
for (let number of numbers) {
    console.log(number);
}

console.log('while loop...')
let index = 0;  // start

while (index < numbers.length) {    // end
    if (index === 0) {
        index++;
        continue;
    } else {
        console.log(numbers[index]);
        index++;    // change
    }
}

// console.log('do while...')
// let userNumber;
 
// do {
//   userNumber = prompt("Please enter a number greater than 0:");
// } while (userNumber <= 0);
 
// console.log(`You entered: ${userNumber}`);



//          //    0  1 2  3 4
// console.log(numbers);

// numbers.push(99, 100, 3, 8);

// console.log(numbers);

// let lastNumber = numbers.pop()

// console.log(lastNumber);

// console.log(numbers);

// numbers[99] = 9;

// console.log(numbers);
