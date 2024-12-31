import "./App.css"
import { useState } from "react"
import Footer from "./components/Footer"
import Jumbotron from "./components/Jumbotron"
import Nav from "./components/Nav"
import Cart from "./components/Cart"
import ProductList from "./components/ProductList"
import CartCotext from "./CartContext"
import Total from "./components/Total"
import { Routes, Route } from "react-router-dom"
import Login from "./components/Login"
import LoginContext from "./LoginContext"

function App() {
  const [cart, setCart] = useState([])
  const [loginToken, setLoginToken] = useState([])

  return (
    <>
      <LoginContext.Provider value={{ loginToken, setLoginToken }}>

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
      </LoginContext.Provider>
    </>
  )
}

export default App
