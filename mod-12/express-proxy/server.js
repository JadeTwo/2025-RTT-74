import express from 'express'

const app = express()

app.get('/api/users', async (req, res) => {
    try {
        // make a request to a external api for data
        const response = await fetch('https://jsonplaceholder.typicode.com/users')

        // check if request was successful
        if (!response.ok) {
            // generate an error if not
            throw new Error('HTTP status error: ' + response.status)
        }

        // format data to json
        const data = await response.json()

        // keep only the properties and values we need
        const transformedData = data.map((user) => ({
            id: user.id,
            name: user.name,
            username: user.username,
            email: user.email
        }))

        console.log(transformedData)

        res.send(transformedData)

    } catch (err) {

        console.error(err.message)

        // 500 is a general server error
        res.status(500).json({ error: err.message })

    }
})

app.get('/api/posts/:id', (req, res) => {
    
})

const port = 3000;

app.listen(port, () => {
    console.log('Server listening on port: ' + port)
})