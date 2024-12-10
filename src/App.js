import axios from 'axios'
import './App.css'
import { useEffect, useState } from 'react'

function App() {
  const [products, setProducts] = useState([])
  const [cart, setCart] = useState([])

  useEffect(() => {
    getProducts()
  }, [])

  function getProducts() {
    axios.get('http://localhost:3006/products').then((response) => {
      setProducts(response.data)
    })
  }

  function addToCart(product) {
    setCart([...cart, product])
    console.log('cart is', cart)
  }
  return (
    <>
      <div className='App'>
        <div className='product-container'>
          {products.map((product, index) => (
            <div key={index} className='product-card'>
              <img src={product.image} alt={product.name} className='product-image' />
              <h3 className='product-name'>{product.name}</h3>
              <p className='product-price'>${product.price.toFixed(2)}</p>
              <button className='fetch-button' onClick={() => addToCart(product)}>
                Add to cart
              </button>
            </div>
          ))}
        </div>
        <div>
          <h1>Cart:</h1>
          {cart.map((product) => (
            <li>{product.name}</li>
          ))}
        </div>
      </div>
    </>
  )
}

export default App
