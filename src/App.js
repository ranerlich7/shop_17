import { useState } from 'react'
import Footer from './components/Footer'
import Jumbotron from './components/Jumbotron'
import Nav from './components/Nav'
import ProductList from './components/ProductList'
import CartCotext from './CartContext'

function App() {
  const [cart, setCart] = useState([])

  return (
    <>
      <CartCotext.Provider value={{ cart, setCart }}>
        <Jumbotron />
        <Nav />
        <ProductList />
        <Footer />
      </CartCotext.Provider>
    </>
  )
}

export default App
