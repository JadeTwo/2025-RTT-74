import { createContext, useState } from 'react'

import './App.css'

import Navbar from './components/Navbar'
import Content from './components/Content'
import UserProfile from './components/UserProfile'
import LoginButton from './components/LoginButton'
import LogoutButton from './components/LogoutButton'

// Step 1: Create the context (optional: add an argument for the default value)
export const ThemeContext = createContext(null)
export const UserContext = createContext(null)

function App() {

  const [theme, setTheme] = useState('light')
  const [currentUser, setCurrentUser] = useState(null)

  const toggleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light')

  const login = (userName) => setCurrentUser({ name: userName })

  const logout = () => setCurrentUser(null)

  return (
    // Step 2: Provide the context (add a value prop)
    <UserContext.Provider value={{ currentUser, login, logout }}>
      <ThemeContext.Provider value={{ theme, toggleTheme }}>

        <Navbar />
        <Content />

        <UserProfile />
        <LoginButton />
        <LogoutButton />
        
      </ThemeContext.Provider>
    </UserContext.Provider>
  )
}

export default App
