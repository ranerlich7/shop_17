import './App.css'
import { useState } from 'react'
import Products from './components/Products'
import Cart from './components/Cart'
import CartCotext from './CartContext'
import Total from './components/Total'

function App() {
  const [cart, setCart] = useState([])

  return (
    <>
      <div className='App'>

        <CartCotext.Provider value={{ cart, setCart }}>
          <Products />
          <Cart />
          <Total />
        </CartCotext.Provider>
      </div>
    </>
  )
}

export default App
