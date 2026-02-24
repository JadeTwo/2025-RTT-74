// Implement three functions that simulate API requests using Promises:
// getProductDetails should simulate fetching product details (e.g., name, price).
// getProductReviews should simulate fetching reviews for a product.
// getRelatedProducts should simulate fetching related products.
// Chain these Promises together to display product details, reviews, and related products in the console.
// Critical Thinking: How does chaining Promises help keep the code organized? What challenges might you face when dealing with complex chains of Promises?

function getProductDetails() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let product = { name: "TV", price: 50, id: "ABC-123" }
            resolve(product)
        }, 1000)
    })
}

function getProductReviews() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (true) {
                let reviews = [
                    { productId: "ABC-123", rating: 5, content: "It was a nice TV!" },
                    { productId: "ABC-123", rating: 7, content: "Great TV!" },
                    { productId: "ABC-123", rating: 3, content: "Bad TV! Broke!" }
                ]
                resolve(reviews)
            } else {
                reject('No product found')
            }
        }, 600)
    })
}
 
function getRelatedProducts() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let relatedProducts = [
                { name: "Speakers", price: 10, id: "ABC-456" },
                { name: "Laptop", price: 500, id: "ABC-789" }
            ]
            try {
                throw new Error('test')
            } catch(e) {
                reject(e)
            }
            
            // resolve(relatedProducts)
        }, 600)
    })
}

getProductDetails() // returns a promise object
    .then((productDetails) => {
        console.log('Product ' + productDetails.id + ':')
        console.log(productDetails)
        return getProductReviews() // returns a promise object
    })
    .then((productReviews) => {
        console.log('Reviews for Product ' + productReviews[0].productId + ':')
        console.log(productReviews)
        return getRelatedProducts() // returns a promise object
    })
    .then((relatedProducts) => {
        console.log('Related Products:')
        console.log(relatedProducts)
    })
    .finally(() => {
        console.log('Complete.')
    })
