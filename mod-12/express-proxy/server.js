import express from 'express'
import axios from 'axios'

const jsonClient = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com'
})

const app = express()

app.use(express.json())

app.get('/api/users', async (req, res) => {
    try {
        // make a request to a external api for data
        const response = await jsonClient.get('/users')

        // axios gives us the formatted data 
        console.log(response.data)

        // keep only the properties and values we need
        const transformedData = response.data.map((user) => ({
            id: user.id,
            name: user.name,
            username: user.username,
            email: user.email
        }))

        console.log(transformedData)

        res.send(transformedData)

    } catch (error) {

        if (error.response) {
            // The request was made and the server responded with a status code
            // that falls out of the range of 2xx
            console.error('API Error:', error.response.status, error.response.data);
            res.status(error.response.status).json({ message: 'Error fetching data from external API.' });
        } else {
            // Something happened in setting up the request that triggered an Error
            console.error('Network Error:', error.message);
            res.status(500).json({ message: 'A network error occurred.' });
        }

    }
})

app.post('/api/posts', async (req, res) => {

    try {
        // pass the request body as the second argument to axios.post()
        const response = await jsonClient.post('/posts', req.body)

        console.log(response.data)

        res.status(201).send('Successfully created!')
    } catch (error) {

        console.error('Error creating post:', error.message);
        res.status(500).json({ message: 'Failed to create post.' });

    }

})

// app.get('/api/users', async (req, res) => {
//     try {
//         // make a request to a external api for data
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')

//         // check if request was successful
//         if (!response.ok) {
//             // generate an error if not
//             throw new Error('HTTP status error: ' + response.status)
//         }

//         // format data to json
//         const data = await response.json()

//         // keep only the properties and values we need
//         const transformedData = data.map((user) => ({
//             id: user.id,
//             name: user.name,
//             username: user.username,
//             email: user.email
//         }))

//         console.log(transformedData)

//         res.send(transformedData)

//     } catch (err) {

//         console.error(err.message)

//         // 500 is a general server error
//         res.status(500).json({ error: 'Failed to fetch data from the external API' })

//     }
// })

// this one uses a Route Parameter (id)
app.get('/api/posts/:id', async (req, res) => {

    try {
        const url = `https://jsonplaceholder.typicode.com/posts/${req.params.id}`;

        const response = await fetch(url)

        // check to see if we were able to find the resource 
        if (response.status === 404) {
            // we return here to stop the function and prevent sending another response (on line 57)
            return res.status(404).json({ error: `Post with id of ${req.params.id} not found` })
        }

        const data = await response.json()

        res.send(data)

    } catch (err) {
        console.error('API request failed:', err.message);
        // 502 Bad Gateway - didn't get the data from the external API
        res.status(502).json({ error: 'Failed to fetch' })
    }

})



app.get('/api/weather/:city', async (req, res) => {
    const { city } = req.params;
    const apiKey = process.env.WEATHER_API_KEY;
    const url = `https://api.example-weather.com/v1/current?city=${city}&key=${apiKey}`;

    try {
        const apiResponse = await fetch(url);

        // Your error handling here...
        if (response.status === 404) {
            // we return here to stop the function and prevent sending another response (on line 57)
            return res.status(404).json({ error: `Weather not available for city: ${req.params.city}` })
        }

        if (response.status === 401) {
            // we return here to stop the function and prevent sending another response (on line 57)
            return res.status(401).json({ error: `Nope! Unauthorized.` })
        }

        const data = await apiResponse.json();

        // Transform and return...

        const transformedData = data.map((example) => ({
            city: example.city,
            temp: example.temp,
            humidity: example.humidity,
            conditions: example.conditions
        }))

        res.status(200).send(transformedData)

    } catch (error) {
        // Handle network errors...
    }
});



const port = 3000;

app.listen(port, () => {
    console.log('Server listening on port: ' + port)
})