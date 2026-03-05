import express from 'express'

const app = express()

// the middleware to format incoming data for us (like from a post request)
app.use(express.json())

app.get('/', (req, res) => {
    res.send('Hello World!');
})

// Route Parameters 
app.get('/users/first/:firstName/last/:lastName', (req, res) => {
    const { firstName, lastName } = req.params
    res.send(`Welcome ${firstName} ${lastName}!`)
})

// Query Strings (ex: /pizzas?size=large&toppings=pepperoni)
app.get('/pizzas', (req, res) => {
    // access option params
    const { size, toppings } = req.query
    console.log(size, toppings)
    res.send(`Pizza: ${size} ${toppings}`)
})

// Request Body
app.post('/users', (req, res) => {
    console.log(req.body)
    res.send(`User ${req.body.name} created successfully.`)
})

const port = 3000

app.listen(port, () => {
    console.log('Server is listening on port : ' + port)
})