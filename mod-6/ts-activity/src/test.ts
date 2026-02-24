// import { OrderStatus as Status } from "./product";
import Product from './product'

let products: Product[] = []

// access the static property
console.log(Product.taxRate)

// creating an instance (object) of the Product class
const product1: Product = new Product("ABC-123", "TV", 10)

console.log(product1.sku)
product1.sku = "BOB-456"
console.log(product1.sku)

product1.getSku()
product1.updateSku("SAM-789")


console.log(products);