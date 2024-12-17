import './App.css'
import { useState } from 'react'
import Footer from './components/Footer'
import Jumbotron from './components/Jumbotron'
import Nav from './components/Nav'
import Cart from './components/Cart'
import ProductList from './components/ProductList'
import CartCotext from './CartContext'
import Total from './components/Total'

function App() {
  const [cart, setCart] = useState([])

  return (
    <>
      <CartCotext.Provider value={{ cart, setCart }}>
        <Jumbotron />
        <Nav />
        <ProductList />
        <Cart/>
        <Total/>
        <Footer />
      </CartCotext.Provider>
    </>
  )
}

export default App
