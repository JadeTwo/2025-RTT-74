// bring in express
import express from 'express'

// bring in path module 
import path from 'path'

// create our express app
const app = express()

// create a variable for the port
const port = 3000

// absolute path to the current file (server.js)
const __dirname = import.meta.dirname

// middleware for serving static files to the client
app.use(express.static(path.join(__dirname, 'public')))

// create a route handler
app.get('/', (req, res) => {
    console.log(req.url)
    res.send('<h1 style="border: 1px solid red;">Hello World!!!!</h1>')
})

// route for sending a specific file
app.get('/greeting', (req, res) => {
    console.log(req.url)
    res.sendFile(path.join(__dirname, 'public/greeting.html'))
})

app.get('/test', (req, res) => {
    console.log(req.url)
    // connect to db
    // retrieve data
    // send data back
    res.json([{}, {}, {}])
})

// listen on a particular port for requests
app.listen(port, () => {
    console.log('Server listening on port: ' + port)
})