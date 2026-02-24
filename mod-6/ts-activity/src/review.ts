// type string
let quote: string = "to be or not to be";
let isValid: boolean = true;

// array of type number
const years: number[] = [1855, 1999, 1980, 1975, 1983];

// tuple
const nameAndAge: [string, number] = ["Bob", 50];

// enums
enum Genre {
    Fiction,  // value of Genre.Fiction would be 0
    Mystery,  // Genre.Mystery would be 1
    Romance,
    History,
    Anime,
    Poetry = "Poetry"   // string enum
}

enum OrderStatus {
    Pending,
    Completed,
    Shipped,
    Cancelled
}


// interface
interface Book {
    title: string,
    author: string,
    genre: Genre,
    published: number,
    pages?: number
}

const book: Book = {
    title: 'Leaves of Grass',
    author: 'Walt Whitman',
    genre: Genre.Poetry,
    published: 1855
}

// array of type Book 
const library: Book[] = []

// function parameters and return type
function addBook(book: Book) {    // void means no return value
    library.push(book);
    console.log(library);
}

addBook(book);

// function signatures (overloading)
function numOrString(input: number): number;
function numOrString(input: string): string;

// implementation 
function numOrString(input: number | string) {
    if (typeof input === 'number') return input * 2
    else return input.toUpperCase();
}

let test: number = numOrString(10);
let test2: string = numOrString("Bob");




interface User {
    username: string;
    email: string;
}

function welcomeUser(user: User): string {
    return `Welcome, ${user.username}! Your email is ${user.email}.`;
}

let newUser = { username: "john_doe", email: "john@example.com" };

// console.log(welcomeUser(newUser));

interface Animal {
    name: string;
    age: number;
}

interface Dog extends Animal {
    breed: string;
}

interface Cat extends Animal {
    whiskers: number;
}

let myCat: Cat = {
    name: "Bob",
    age: 50,
    whiskers: 10
}

let myDog: Dog = {
    name: "Buddy",
    age: 3,
    breed: "Golden Retriever",
};

let pets: Animal[] = []

pets.push(myDog);
pets.push(myCat);

// console.log(myDog);

// type alias    // union type
type ProductID = string | number;

let productNumbers: ProductID[] = [1, "A", "B", 2]

let id1: ProductID = "ABC123";
let id2: ProductID = 456;

// console.log(`Product IDs: ${id1}, ${id2}`);

// interface Product {
//     id: ProductID;
//     name: string;
//     price: number;
//     inStock: boolean;
// }

// let item: Product = {
//     id: 1,
//     name: "Laptop",
//     price: 999.99,
//     inStock: true,
// };

// console.log(item);


// interface Product {
//     id: ProductID;
//     name: string;
//     price: number;
//     inStock: boolean;
// }


// classes
class Product {

    name: string;
    price: number;
    inStock: boolean;
    status: OrderStatus;

    constructor(name: string, price: number, status: OrderStatus, inStock: boolean = true) {
        this.name = name;
        this.price = price;
        this.inStock = inStock;
        this.status = status;
    }

    displayDetails(): string {
        return `${this.name} costs $${this.price} and is ${this.inStock ? "in stock" : "out of stock"}.`;
    }
}

// product1 is an instance of the Product class
// const product1 = new Product("Laptop", 1200);
// const product2 = new Product("TV", 10);

let products: Product[] = []

for (let i = 0; i < 100; i++) {
    products.push(new Product("TV", 10 + i, OrderStatus.Completed))
}

console.log(products);

// console.log(product1.displayDetails());
// console.log(product2.displayDetails());



let myObj = {
    name: "Bob",
    talk: function() {

    }
}

// interface Product {
//     id: ProductID;
//     name: string;
//     price: number;
//     inStock: boolean;
// }

type MyMethod = (a: number) => number

interface Example {
    product: Product,
    talk: MyMethod
}




class Animal {
    constructor(public name: string, protected species: string, private dna: string) {}
    test() {
        // 1
    }
}
class Dog extends Animal {
    test() {
        // 2
    }
}
        // 3



/*

    1: dna
    2: name
    3: species



*/