import React, { useContext } from 'react'
import CartCotext from '../CartContext'
import { Link } from 'react-router-dom'
import LoginContext from '../LoginContext'

function Nav() {
  const { cart, setCart } = useContext(CartCotext) // eslint-disable-line no-unused-vars
  const { loginToken, setLoginToken } = useContext(LoginContext) // eslint-disable-line no-unused-vars

  return (
    <nav class='navbar navbar-inverse'>
      <div class='container-fluid'>
        <div class='navbar-header'>
          <button type='button' class='navbar-toggle' data-toggle='collapse' data-target='#myNavbar'>
            <span class='icon-bar'></span>
            <span class='icon-bar'></span>
            <span class='icon-bar'></span>
          </button>
          <a class='navbar-brand' href='http://www.google.com'>
            Logo
          </a>
        </div>
        <div class='collapse navbar-collapse' id='myNavbar'>
          <ul class='nav navbar-nav'>
            <li class='active'>
              <Link to='/'>Home</Link>
            </li>
            <li class='active'>
              <Link to='/about'>About</Link>
            </li>
          </ul>
          <ul class='nav navbar-nav navbar-right'>
            {loginToken.is_admin && (
              <li>
                <Link to='/login'>Admin</Link>
              </li>
            )}
            <li>
              <Link to='/login'>
                {loginToken.username ? (
                  <span className='text-primary'>Hello {loginToken.username}</span>
                ) : (
                  <>
                    <span class='glyphicon glyphicon-user'></span> Your Account
                  </>
                )}
              </Link>
            </li>
            <li>
              <Link to='/cart'>
                <span class='glyphicon glyphicon-shopping-cart'></span> Cart : {cart.length}
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Nav
