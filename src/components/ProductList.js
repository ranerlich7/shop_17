import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import CartCotext from '../CartContext'

function ProductList() {
  const [products, setProducts] = useState([])
  const { cart, setCart } = useContext(CartCotext)

  useEffect(() => {
    getProducts()
    console.log('starting')
  }, [])

  function getProducts() {
    axios.get('http://localhost:3005/products').then((response) => {
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
      <div class='container'>
        <div class='row'>
          {products.map((product, index) => (
            <div key={index} class='col-sm-4'>
              <div class='panel panel-primary'>
                <div class='panel-heading'>{product.name}</div>
                <div class='panel-body'>
                  <img src={product.image} className='product-image img-responsive' style={{ width: '100%' }} alt={product.name} />
                </div>
                <div class='panel-footer'>${product.price.toFixed(2)}</div>
                <button className='fetch-button' onClick={() => addToCart(product)}>
                  Add to cart
                </button>
              </div>
            </div>
            
          ))}
        </div>
      </div>
      <br />
    </>
  )
}

export default ProductList
