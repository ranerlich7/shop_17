import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import CartCotext from '../CartContext'

function Products() {
  const [products, setProducts] = useState([])
  const { cart, setCart} = useContext(CartCotext)

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
  )
}

export default Products
