// global scope
let test = 1;

if (true) {
    // block scope
    let test2 = 2;
    // console.log(test)
}

// console.log(test2);


let obj = {
    // block scope
}

class Test {
    // block scope
}

// function test() {
//     // function scope
// }


// closure
function createCounter() {
  let count = 0;
  return function() {
    count++;
    return count;
  };
}

const counter = createCounter(); // returns function() { count++; return count; }
const counterTwo = createCounter();

console.log(counter()); // 1
console.log(counter()); // 2
console.log(counter()); // 3
console.log(counter());
console.log(counter());

console.log(counterTwo());
