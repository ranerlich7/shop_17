import React, { useEffect, useState } from "react"
import Footer from "./components2/Footer"
import SideNav from "./components2/SideNav"
import Main from "./components2/Main"
import { Route, Routes, useNavigate } from "react-router-dom"
import ProductList from "./components/ProductList"
import Cart from "./components/Cart"
import Login from "./components/Login"
import CartContext from "./CartContext"
import LoginContext from "./LoginContext"
import { jwtDecode } from "jwt-decode"

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
      <CartContext.Provider value={{ cart, setCart }}>
        <LoginContext.Provider value={{ login, setLogin }}>
          <div class="container-fluid">
            <div class="row content">
              <SideNav />
              <Routes>
                <Route path="/" element={<ProductList />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/main" element={<Main />} />
              </Routes>
            </div>
          </div>
        </LoginContext.Provider>
      </CartContext.Provider>

      <Footer />
    </>
  )
}

export default App
