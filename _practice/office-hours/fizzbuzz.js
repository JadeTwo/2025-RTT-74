// If a number is divisible by 3, output "Fizz".
// If a number is divisible by 5, output "Buzz".
// If a number is divisible by both 3 and 5 (i.e., 15), output "FizzBuzz".
// Otherwise, output the number itself.

function fizzbuzz(n) {
  if (n % 15 === 0) {
    return "FizzBuzz";
  } else if (n % 3 === 0) {
    return "Fizz";
  } else if (n % 5 === 0) {
    return "Buzz";
  } else {
    return n;
  }
}

// console.log(fizzbuzz(10))

const fizzBuzzTable = [];
for (let row = 0; row < 10; row++) {
  const rowObj = {};
  for (let col = 0; col < 10; col++) {
    const num = row * 10 + col + 1;
    rowObj[`col${col}`] = fizzbuzz(num);
  }
  console.log(rowObj)
  fizzBuzzTable.push(rowObj);
}

// console.table(fizzBuzzTable)