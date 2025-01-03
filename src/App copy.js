import "./App.css"
import { useEffect, useState } from "react"
import Footer from "./components/Footer"
import Jumbotron from "./components/Jumbotron"
import Nav from "./components/Nav"
import Cart from "./components/Cart"
import ProductList from "./components/ProductList"
import CartCotext from "./CartContext"
import LoginContext from "./LoginContext"
import Total from "./components/Total"
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom"
import Login from "./components/Login"
import { jwtDecode } from "jwt-decode"
import Register from "./components/Register"

function App() {
  const [cart, setCart] = useState([])
  const [login, setLogin] = useState([])
  const navigate = useNavigate() // Initialize navigate
  useEffect(() => {
    const token = localStorage.getItem("token")
    token && setLogin(jwtDecode(token))
  }, [])

  return (
    <>
      <CartCotext.Provider value={{ cart, setCart }}>
        <LoginContext.Provider value={{ login, setLogin }}>
          <Jumbotron />
          <Nav />
          <Routes>
            <Route path="/" element={<ProductList />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
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
        </LoginContext.Provider>
      </CartCotext.Provider>
    </>
  )
}

export default App
