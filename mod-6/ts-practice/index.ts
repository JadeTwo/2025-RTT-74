class Animal {
    constructor(
        public name: string, 
        protected species: string, 
        private dna: string
    ) {}
    breath() {}
}
class Dog extends Animal {
    bark() {}
}


async function getProduct(id: number) {
    const res = await fetch('https://dummyjson.com/products/' + id)
    const product = await res.json()
    console.log(product)
    return product
}

async function main() {
    const { 
        id, 
        title, 
        description,
        price, 
        discountPercentage, 
        rating, 
        privatesku,
        dimensions,
        reviews,
        images
    } = await getProduct(1);
    const product = new Product(id, title, description, price, discountPercentage, rating, privatesku, dimensions, reviews, images[0]);
    // console.log(product)
}

main();

class Product {
    constructor(
        id: string,
        private title: string,
        private description: string,
        private price: number,
        private discountPercentage: number,
        private rating: number,
        private privatesku: string,
        private dimensions: Dimension,
        private reviews: Review[],
        private image: string,
    ) {
        // console.log(this)
    }
}

interface Dimension {
    width: number,
    height: number,
    depth: number
}

interface Review {
    rating: number,
    comment: number,
    date: string | Date,
    reviewerName: string,
    reviewerEmail?: string
}
