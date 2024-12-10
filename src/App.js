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
    const existingProduct = cart.find((cartProduct) => cartProduct === product)
    if (!existingProduct) {
      setCart([...cart, product])
      console.log('cart is', cart)
    }
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
        <div className='cart-container'>
          <h1 className='cart-title'>Cart:</h1>
          {cart.length > 0 ? (
            cart.map((product, index) => (
              <div key={index} className='cart-item'>
                <img src={product.image} alt={product.name} className='cart-item-image' />
                <div className='cart-item-details'>
                  <h3 className='cart-item-name'>{product.name}</h3>
                  <p className='cart-item-price'>${product.price.toFixed(2)}</p>
                </div>
              </div>
            ))
          ) : (
            <p className='cart-empty'>Your cart is empty</p>
          )}
        </div>
      </div>
    </>
  )
}

export default App
