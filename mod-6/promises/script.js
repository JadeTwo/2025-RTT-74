// this function is simulating a fake API request for user data
const fetchUser = () => {
    // it returns a promise object that after 1 secound will resolve (fullfill) the promise and provide the data
    return new Promise((resolve) => {
        setTimeout(() => resolve("User data"), 1000);
    });
};

// this function is simulating a fake API request for order details (e-commerce website)
const fetchOrders = (userData) => {
    // it returns a promise object that after 1 secound will resolve (fullfill) the promise and an array of 3 orders
    return new Promise((resolve) => {
        setTimeout(() => resolve(["Order1", "Order2", "Order3"]), 1000);
    });
};

// const promise1 = new Promise((resolve, reject) => {
//     resolve('hello');
// })

// this static method (.resolve) returns a promise that is immediately resolved 
const promise1 = Promise.resolve('hello');

// fetchUsers and fetchOrders return promises which are stored in variables here
const promise2 = fetchUser()
const promise3 = fetchOrders()

// this static method (.all) waits for all promises (from the array) to resolve 
// if any of the 3 promises fail then it stops there and rejects them all
// if they all resolve (fullfill) then (.then) the data from all three is provided 
Promise
    .all([promise1, promise2, promise3])
    .then((data) => {
        console.log(data)
    })
    .catch()


// const promise1 = fetchUser()

// const promise2 = promise1.then((user) => {
//     console.log("Fetched user:", user);
//     return fetchOrders(user);
// })

// promise2.then((orders) => {
//     console.log("Fetched orders:", orders);
// });

// // method chaining 
// fetchUser()
//     .then((user) => {
//         console.log("Fetched user:", user);
//         fetchOrders(user)
//             .then((orders) => {
//                 console.log("Fetched orders:", orders);
//             });
//     })





// Promise.resolve()

// promise1
//     .then(() => {
//         throw new Error("Something failed");
//         console.log("Do this");
//     })
//     .catch(() => {
//         console.error("Do that");
//     })
//     .then(() => {
//         console.log("Do this, no matter what happened before");
//     });

