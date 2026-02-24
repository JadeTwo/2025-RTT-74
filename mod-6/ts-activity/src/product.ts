export enum OrderStatus {
    Pending,
    Completed,
    Shipped,
    Cancelled
}

// parent or "super" class
export default class Product {

    public static taxRate = 0.05;

    private _sku: string;
    public name: string;
    public price: number;
    protected inStock: boolean;
    protected status: OrderStatus;

    // getter method
    get sku(): string {
        return 'this is the first character of the sku :) -> ' + this._sku[0];
    }

    getSku(): string {
        return this._sku
    }

    // setter method
    set sku(newSku: string) {
        this._sku = newSku
    }

    updateSku(newSku: string) {
        this._sku = newSku
    }

    constructor(sku: string, name: string, price: number, status: OrderStatus = OrderStatus.Completed, inStock: boolean = true) {
        this.name = name;
        this.price = price;
        this.inStock = inStock;
        this.status = status;
        this._sku = sku;
    }

    protected displayDetails(): string {
        return `${this.name} (SKU: ${this.sku}) costs $${this.price}.`;
    }
}

// child or "sub" class
class PhysicalProduct extends Product {
    weight: number;

    constructor(sku: string, name: string, price: number, weight: number) {
        super(sku, name, price);
        this.weight = weight;
    }

    displayDetails(): string {

        return super.displayDetails() + ` It weighs ${this.weight} kg.`;
    }
}





abstract class Shape {

    abstract getArea(): number; // Abstract method with no implementation

    displayArea(): string {
        return `The area is ${this.getArea()} square units.`;
    }
}

class Square extends Shape {
    getArea(): number {
        return 10
    }
}

class Circle extends Shape {
    radius: number;

    constructor(radius: number) {
        super();
        this.radius = radius;
    }

    getArea(): number {
        return Math.PI + this.radius + this.radius;
    }
}

const circle = new Circle(5);
console.log(circle.displayArea());


interface Vehicle {
    speed: number;
    start(): void;
}

const car: Vehicle = {
    speed: 10,
    start() {
        console.log('starting in 3... 2... 1... GO!')
    },
}

const car2: Vehicle = {
    speed: 10,
    start() {
        console.log('starting in 3... 2... 1... GO!')
    },
}

class Bike implements Vehicle {
    
    speed: number;

    constructor(speed: number) {
        this.speed = speed;
    }

    start(): void {
        console.log("Bike starts at speed " + this.speed + "!");
    }
}

const bike = new Bike(25);
const bike2 = new Bike(30);
bike.start();