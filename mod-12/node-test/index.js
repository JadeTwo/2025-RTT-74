// ES6Modules
// import greet from './test.js'

// CommonJS
const greet = require('./test.js')
const { add, subtract } = require('./math.js')

console.log(add(1,1))
console.log(subtract(1,1))

console.log(greet('bob'));

console.log('Hello World!!!!!!');