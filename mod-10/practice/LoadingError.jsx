import { useEffect, useState } from 'react'

import './App.css'

function App() {

  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {

    let url = 'https://jsonplaceholder.typicode.com/albums'

    // Step 1: Create the controller for the fetch
    const controller = new AbortController()

    // Step 2: Attach the signal from the controller to the fetch
    // fetch(url, { signal: controller.signal })

    // Step 3: Cancel the fetch
    // controller.abort()

    async function getData() {

      setLoading(true)
      setError(null)

      try {
   
        // wait two seconds before request (to mimic a slow fetch)
        await new Promise((res) => setTimeout(res, 2000))

        const response = await fetch(url, { signal: controller.signal })

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json()
        setData(data)

      } catch(e) {
        setError(e.message)
        console.log(e)

      } finally {
        setLoading(false)
      }
    }

    getData()

    // cleanup function
    return () => {
      controller.abort()
    }

  }, [])
  
  return (
    <div>
      {loading && <div>Loading data...</div>}
      {error && <div>Something went wrong: {error}</div>}
      {data && data.map(item => 
        <p key={item.id}>
          {item.title}
        </p>
      )}
    </div>
  )
}

export default App
