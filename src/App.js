import axios from 'axios'
import './App.css'
import { useEffect, useState } from 'react'

function App() {
  const [products, setProducts] = useState([])
  
  useEffect(() => {
    getProducts()
  }, [])

  function getProducts() {
    axios.get('http://localhost:3006/products').then((response) => {
      setProducts(response.data)
    })
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
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default App
