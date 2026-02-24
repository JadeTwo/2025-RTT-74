import './App.css'
import useLocalStorage from './hooks/localStorageHook'
import useFetchData from './hooks/fetchHook'
import useWindowSize from './hooks/windowSizeHook'
import useForm from './hooks/formHook'

function App() {

  // const { data, loading, error } = useFetchData('https://jsonplaceholder.typicode.com/posts')

  const { width, height } = useWindowSize()
  
  // Provide an example component that uses useLocalStorage to store and retrieve a 
  // user’s preference (e.g., a theme name or a simple counter).
  const [theme, setTheme] = useLocalStorage("theme", "light")

  const { values, handleChange, handleSubmit } = useForm({ name: '', title: '', email: '' })

  // if (loading) return <div>Loading...</div>

  // console.log(data)

  return (
    <div>
      <div 
        onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
        style={{
            backgroundColor: theme === 'light' ? 'white' : 'black',
            color: theme === 'light' ? 'black' : 'white'
        }}
      >
        Hello World
      </div>
      
      <p>width: {width}</p>
      <p>height: {height}</p>
      <ul>
        {/* {data && data.map(d => <div key={d.id}>{d.title}</div>)} */}
      </ul>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input 
          type="text" 
          id="name" 
          name="name"
          value={values.name} 
          onChange={handleChange}
        />
        <label htmlFor="title"  >Title</label>
        <input 
          type="text" 
          id="title" 
          name="title" 
          value={values.title} 
          onChange={handleChange}
        />
        <label htmlFor="" >Email</label>
        <input 
          type="text" 
          id="email" 
          name="email" 
          value={values.email} 
          onChange={handleChange}
        />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default App