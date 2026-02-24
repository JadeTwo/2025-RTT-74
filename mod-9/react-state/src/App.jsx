import { useEffect, useState } from 'react'
import './App.css'

const data = [
  { name: 'bob', id: 1 },
  { name: 'billy', id: 2 },
  { name: 'sally', id: 3 }
]

const arr = ['hello', 'good morning', 'good night']

function Person({ item }) {
  return <p>{item.name}</p>
}

const jsxArr = data.map((obj, index) => 
      <Person 
        item={obj} 
        key={obj.id}
      />
)

const jsxArr2 = data.map((obj) => 
  <li key={obj.id}>
    <p>{obj.name}</p>
    <p>{obj.age}</p>
  </li>
)

function App() {

  const [count, setCount] = useState(0)

  const config = { name: 'bob' }

  useEffect(() => {
    console.log('test123')
    setCount(count + 1)
  }, [config.name])

  return (
    <>
      <hr />
      {jsxArr}
      <hr />
      <ul>
        {jsxArr2}
      </ul>
    </>
  )
}

export default App
 

 
