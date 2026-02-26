import { Route, Routes } from 'react-router-dom'
import './App.css'

import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ProductsPage from './pages/ProductsPage'

function App() {

  return (
    <>
      <nav>
        
      </nav>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/products" element={<ProductsPage />} />
      </Routes>
    </>
  )
}

export default App
