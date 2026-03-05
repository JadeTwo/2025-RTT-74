import express from 'express'

const app = express()

// custom (router-level... specific to a path) middleware
app.use('/admin', (req, res, next) => {
  if (req.query.user === 'admin') {
    console.log('Admin access granted.');
    next();
  } else {
    res.status(403).send('Forbidden: You must be an admin.');
  }
})

// custom (global) middleware
app.use((req, res, next) => {
    console.log('Middleware 1: Logging')
    // move on to next middleware or route handler
    next()
})

app.use((req, res, next) => {
    console.log('Middleware 2: Setting Time')
    // add info about the current time to the request object
    req.time = Date.now()
    next()
})

app.use((req, res, next) => {
    console.log('Middleware 3: Changing Toppings')
    req.bootlegQuery = { toppings: 'pineapple', size: req.query.size }
    next()
})

// the middleware to format incoming data for us (like from a post request)
app.use(express.json())

app.get('/', (req, res) => {
    res.send('Hello World!');
})

app.get('/admin/test', (req, res) => {
    res.status(200).send('Welcome Admin... Test!');
})

app.get('/admin', (req, res) => {
    console.log('Header: ' + req.headers.stacy)
    res.status(200).send('Welcome Admin!')
})

// Route Parameters 
app.get('/users/first/:firstName/last/:lastName', (req, res) => {
    const { firstName, lastName } = req.params
    res.send(`Welcome ${firstName} ${lastName}!`)
})

// Query Strings (ex: /pizzas?size=large&toppings=pepperoni)
app.get('/pizzas', (req, res) => {
    // access option params
    const { size, toppings } = req.bootlegQuery
    console.log(req.time)
    res.status(200).send(`Pizza: ${size} ${toppings}`)
})

// Request Body
app.post('/users', (req, res) => {
    console.log(req.body)
    res.status(201).send(`User ${req.body.name} created successfully.`)
})

const port = 3000

app.listen(port, () => {
    console.log('Server is listening on port : ' + port)
})