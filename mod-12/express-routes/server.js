import express from 'express'

const app = express()

app.get('/', (req, res) => {
    res.send('Hello World!');
})

// Route Parameters 
app.get('/users/first/:firstName/last/:lastName', (req, res) => {
    const { firstName, lastName } = req.params
    res.send(`Welcome ${firstName} ${lastName}!`)
})

// Query Strings
app.get('/pizzas', (req, res) => {
    // access option params
    const { size, toppings } = req.query
    console.log(size, toppings)
    res.send(`Pizza: ${size} ${toppings}`)
})

const port = 3000

app.listen(port, () => {
    console.log('Server is listening on port : ' + port)
})