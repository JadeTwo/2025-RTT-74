function resolveAfterSeconds(t) {
    const myPromise = new Promise(resolve => {
        setTimeout(() => {
            resolve('Done!');
        }, t * 1000);
    });
    return myPromise;
}

// console.log('Testing...')
// resolveAfterSeconds(2)
//     .then((str) => {
//         console.log(str)
//     })

// const testAwait2 = async () => {}

async function testAwait() {
    console.log('Testing...');
    const result = await resolveAfterSeconds(2);
    console.log(result);
    // return 'Hello' // Promise.resolve('Hello')
}

// testAwait();


const fetchDataWithError = async () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Success')
    }, 1000);
  });
};

const promise1 = fetchDataWithError() // returns a promise object

// option 1
// promise1
//     .then((data) => { 
//         console.log(data)
//     })
//     .catch((e) => {

//     })

// option 2 
async function getData() {
    try {
        const data = await promise1
        console.log(data)
    } catch(e) {

    }
}

const handleData = async () => {
  try {
    const data = await fetchDataWithError();
    console.trace();
    console.log("Data:", data);
  } catch (error) {
    console.error("Error:", error);
  }
};


// handleData();


let count = 0

// recursion
// function test() {
//     count++;
//     test();
// }

// try {
//     test();
// } catch(e) {
//     console.log(e);
//     console.log('end. call stack reached: ' + count)
// }

const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
 
wait(0).then(() => console.log("Cat"));
 
Promise.resolve()
  .then(() => console.log("Dog"))
  .then(() => console.log("Cow"));
 
console.log("Bird");

// call stack > microtask queue > task queue