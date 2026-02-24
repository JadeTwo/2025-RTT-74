const button = document.querySelector('button')
const li = document.querySelector('li')
const ul = document.querySelector('ul')
const body = document.body

document.addEventListener('click', (e) => {
    console.dir(e.shiftKey)
}, true)

button.addEventListener('click', (e) => {
    console.log('%cbutton %cevent handler', 'color: red', 'color: black')
})

li.addEventListener('click', (e) => {
    console.log('%cli %cevent handler', 'color: green', 'color: black')
})

ul.addEventListener('click', (e) => {
    console.log('%cul %cevent handler', 'color: orange', 'color: black')
})

body.addEventListener('click', (e) => {
    console.log('%cbody %cevent handler', 'color: blue', 'color: black')
})