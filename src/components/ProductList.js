import axios from "axios"
import React, { useContext, useEffect, useState } from "react"
import CartCotext from "../CartContext"
import Product from "./Product"
import { Grid2 } from "@mui/material"

function ProductList() {
  const [products, setProducts] = useState([])
  const { cart, setCart } = useContext(CartCotext)
  const [search, setSearch] = useState("")
  const [underT, setUnderT] = useState(false)

  useEffect(() => {
    getProducts()
    console.log("calling getProducts")
  }, [search, underT])

  function getProducts() {
    axios.get("https://fakestoreapi.com/products/").then((response) => {
      let newProducts = response.data.filter((product) =>
        product.title.includes(search)
      )
      if (underT) {
        newProducts = newProducts.filter((product) => product.price < 1000)
      }
      setProducts(newProducts)
    })
  }
  function underThousand() {
    setUnderT(!underT)
  }

  return (
    <>
      <div class="container">
        Search:
        <input value={search} onChange={(e) => setSearch(e.target.value)} />
        <button onClick={underThousand}>Under 1000</button>
        <Grid2 container spacing={2}>
          {products.map((product, index) => (
            <Grid2 size={4}>
              <Product product={product} />
            </Grid2>
          ))}
        </Grid2>
      </div>
      <br />
    </>
  )
}

export default ProductList
