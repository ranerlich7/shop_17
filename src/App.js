import "./App.css"
import { useState } from "react"
import Footer from "./components/Footer"
import Jumbotron from "./components/Jumbotron"
import Nav from "./components/Nav"
import Cart from "./components/Cart"
import ProductList from "./components/ProductList"
import CartCotext from "./CartContext"
import Total from "./components/Total"
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom"
import Login from "./components/Login"

function App() {
  const [cart, setCart] = useState([])
  const navigate = useNavigate() // Initialize navigate

  return (
    <>
      <CartCotext.Provider value={{ cart, setCart }}>
        <Jumbotron />
        <Nav />
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/about"
            element={
              <>
                <h1>This is the about page</h1>
              </>
            }
          />
        </Routes>

        <Total />
        <Footer />
      </CartCotext.Provider>
    </>
  )
}

export default App
