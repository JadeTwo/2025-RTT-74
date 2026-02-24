import { createContext, useState } from 'react'

import './App.css'

import Navbar from './components/Navbar'
import Content from './components/Content'

// Step 1: Create the context (optional: add an argument for the default value)
export const ThemeContext = createContext()

function App() {

  const [theme, setTheme] = useState('light')

  const toggleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light')

  return (
    // Step 2: Provide the context (add a value prop)
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <Navbar />
      <Content />
    </ThemeContext.Provider>
  )
}

export default App
