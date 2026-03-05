// bring in express
import express from 'express'

// create express app
const app = express()

// creating our custom logger middleware
function requestLogger(req, res, next) {
    // logging the method and path (ex: GET /products)
    console.log(`${req.method} ${req.path} ${new Date().toLocaleTimeString()}`)
    next()
}

// creating our custom authentication middleware
function checkApiKey(req, res, next) {
    // checking for api key header 
    if (req.headers['x-api-key'] === 'supersecretkey') {
        next()
    } else {
        res.status(401).json({ error: 'Unauthorized: API Key required' })
    }
}

// setup our custom (global) middleware 
app.use(requestLogger)

// setup our custom (route-specific) middleware
app.use('/api', checkApiKey)

// create a basic route for testing
app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/test', (req, res) => {
    res.send('Test')
})

// can only access these /api routes with api key header
app.get('/api/test', (req, res) => {
    res.send('API Test')
})

app.get('/api/user', (req, res) => {
    res.send('API User')
})

// create a port variable
const port = 3000

// start the server
app.listen(port, () => console.log('Server listening on port: ' + port))




// HOW TO SETUP:

// 1. npm init -y (creates package.json)
// 2. create the main server file (server.js or index.js)
// 3. npm i express (install express)


