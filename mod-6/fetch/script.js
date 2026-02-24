const promise = fetch('https://jsonplaceholder.typicode.com/todos/1') // returning a promise object

// option 1: use .then
promise
    .then((response) => {
        return response.json() // returning a promise object
    })
    .then((data) => {
        console.log(data)
    })
    .catch((e) => {
        console.log('in catch: ');
        console.log(e);
    })

// option 2: async/await 
async function handleRequest() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users') // returns a promise

        // if (!response.ok) {
        //     throw new Error('Something went wrong')
        // }

        const users = await response.json() // format data to json 

        for (let user of users) {
            console.log('id: ' + user.id + ', name: ' + user.name)
        }
        console.log('total users: ', users.length);
    } catch (e) {
        console.log(e);
    }
}

handleRequest()

class Animal {
    breath() {}
}
class Mammal extends Animal {
    growHair() {}
}
class Dog extends Mammal {
    bark() {}
}
class GoldenRetriever extends Dog {
    retrieve() {}
}
class MyDog extends Dog {}
