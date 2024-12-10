import './App.css'
import { useState } from 'react'
import Products from './components/Products'
import Cart from './components/Cart'
import CartCotext from './CartContext'

function App() {
  const [cart, setCart] = useState([])

  return (
    <>
      <div className='App'>
        <CartCotext.Provider value={{ cart, setCart }}>
          <Products />
          <Cart />
        </CartCotext.Provider>
      </div>
    </>
  )
}

export default App
