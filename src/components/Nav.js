import React, { useContext } from "react"
import CartCotext from "../CartContext"
import { Link } from "react-router-dom"
import LoginContext from "../LoginContext"
import { styled } from "@mui/material/styles"
import IconButton from "@mui/material/IconButton"
import Badge, { badgeClasses } from "@mui/material/Badge"
import ShoppingCartIcon from "@mui/icons-material/ShoppingCartOutlined"
import CartDrawer from "./CartDrawer"

function Nav() {
  const { cart, setCart } = useContext(CartCotext)
  const { login, setLogin } = useContext(LoginContext)
  function logout() {
    setLogin(null)
    localStorage.removeItem("token")
  }

  const CartBadge = styled(Badge)`
    & .${badgeClasses.badge} {
      top: -12px;
      right: -6px;
    }
  `

  return (
    <nav class="navbar navbar-inverse">
      <div class="container-fluid">
        <div class="navbar-header">
          <button
            type="button"
            class="navbar-toggle"
            data-toggle="collapse"
            data-target="#myNavbar"
          >
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a class="navbar-brand" href="http://www.google.com">
            Logo
          </a>
        </div>
        <div class="collapse navbar-collapse" id="myNavbar">
          <ul class="nav navbar-nav">
            <li class="active">
              <Link to="/">Home</Link>
            </li>
            <li class="active">
              <Link to="/about">About</Link>
            </li>
          </ul>
          <ul class="nav navbar-nav navbar-right">
            {login?.is_admin && (
              <li>
                <Link to="/login">Admin</Link>
              </li>
            )}
            <li>
              <Link to="/login">
                <span class="glyphicon glyphicon-user"></span>
                {login ? `hello ${login.username}` : "Your Account"}
              </Link>
              {login && <button onClick={logout}>logout</button>}
            </li>
            <li>
              <Link to="/cart">
                <IconButton>
                  <ShoppingCartIcon color="success" fontSize="medium" />
                  <CartBadge
                    badgeContent={cart.length}
                    color="primary"
                    overlap="circular"
                  />
                </IconButton>
              </Link>
            </li>
            <li>
              <CartDrawer />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Nav
