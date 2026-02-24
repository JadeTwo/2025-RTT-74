import { add } from "./utils/taxCalculator.js"

interface User {
    name: string,
    age: number
}

let bob: User = {
    name: 'bob',
    age: 50
}

console.log(bob, add(5,6));