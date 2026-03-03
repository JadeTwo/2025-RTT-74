// bring in express
import express from 'express'

// create our express app
const app = express()

// create a route handler
app.get('/', (req, res) => {
    res.send('Hello World!')
})

// listen on a particular port for requests
app.listen(3000, () => {
    console.log('Server listening on port: 3000')
})