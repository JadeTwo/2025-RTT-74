import { useEffect, useState } from 'react'

import './App.css'

function App() {

  const [search, setSearch] = useState('')
  const [results, setResults] = useState(null)
  const [loading, setLoading] = useState(false)

  useEffect(() => {

    const controller = new AbortController()

    async function getResults() {
      try {
        const response = await fetch('https://dummyjson.com/users/search?q=' + search, { signal: controller.signal }) 
        const data = await response.json()
        console.log(data.users)
        setResults(data.users)
      } catch(e) {
        console.log(e)
      } finally {
        setLoading(false)
      }
    }

    // anytime user types the results should clear
    setResults(null)

    // as soon as user types indicate "loading"
    if (search) {
      setLoading(true)
    // if no search term then clear loading and don't make a request
    } else {
      setLoading(false)
      return
    }

    // only make a request if the user hasn't typed for 500ms
    const timer = setTimeout(() => {
      getResults()
    }, 500)

    return () => {
      clearTimeout(timer)
      controller.abort()
    }
  }, [search])

  return (
    <div>
      <div>
        <input type="text" name={search} onChange={(e) => setSearch(e.target.value)} />
        <div>{loading && 'Loading...'}</div>
        <ul>
           {results && results.map((r) => 
              <li key={r.id}>{r.firstName} {r.lastName}</li>
            )}
        </ul>
      </div>
    </div>
  )
}

export default App
