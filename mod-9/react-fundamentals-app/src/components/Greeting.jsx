// let props = { name: 'bob', lastName: 'bobberton', age: 50 }

// object destructuring
// let { name, age } = props

// let name = myObject.name
// let lastName = myObject.lastName
// let age = myObject.age

// array destructuring


// destructure props
function Greeting({ name, lastName, children }) {

    return (
        <div class="card">  
            <div>Hello {name} {lastName}</div>
            {children}
        </div>
    )
}

export default Greeting;