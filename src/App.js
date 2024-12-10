import axios from 'axios'
import './App.css'
import { useEffect, useState } from 'react'

function App() {
  const [products, setProducts] = useState([])
  const [cart, setCart] = useState([])
  // let defaultCart = [
  //   {product: {'iphone'} , quantity: 1},
  //   {product: {'mac'} , quantity: 3}
  // ]

  useEffect(() => {
    getProducts()
  }, [])

  function getProducts() {
    axios.get('http://localhost:3006/products').then((response) => {
      setProducts(response.data)
    })
  }

  function addToCart(product) {
    // Check if the product is already in the cart
    const existingCartItem = cart.find((cartItem) => cartItem.product === product);
  
    if (existingCartItem) {
      // If found, update its quantity
      const updatedCart = cart.map((cartItem) =>
        cartItem.product === product
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      );
      setCart(updatedCart);
    } else {
      // If not found, add a new item to the cart
      setCart([...cart, { product: product, quantity: 1 }]);
    }
    console.log('cart is', cart);
  }
    return (
    <>
      <div className='App'>
        <div className='product-container'>
          {products.map((product, index) => (
            <div key={index} className='product-card'>
              <img src={product.image} alt={product.name} className='product-image' />
              <h3 className='product-name'>{product.name}</h3>
              <p className='product-price'>${product.price}</p>
              <button className='fetch-button' onClick={() => addToCart(product)}>
                Add to cart
              </button>
            </div>
          ))}
        </div>
        <div className='cart-container'>
          <h1 className='cart-title'>Cart:</h1>
          {cart.length > 0 ? (
            cart.map((cartItem, index) => (
              <div key={index} className='cart-item'>
                <img src={cartItem.product.image} alt={cartItem.product.name} className='cart-item-image' />
                <div className='cart-item-details'>
                  <h3 className='cart-item-name'>{cartItem.product.name}</h3>
                  <p className='cart-item-price'>${cartItem.product.price}</p>
                  <h3 className='cart-item-name'>Quantity: {cartItem.quantity}</h3>
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
