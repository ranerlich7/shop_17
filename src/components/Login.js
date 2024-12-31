import axios from 'axios'
import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { jwtDecode } from "jwt-decode"
import LoginContext from '../LoginContext'

function Login() {
  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')
  const [message, setMessage] = useState('')
  const navigate = useNavigate() // Initialize navigate
  const { loginToken, setLoginToken } = useContext(LoginContext) // eslint-disable-line no-unused-vars

  function login() {
    console.log(`login success with username: ${userName} password:${password}`)
    const data = { username: userName, password: password }
    axios
      .post('http://localhost:8000/login/', data)
      .then((response) => {
        const token = response.data.access
        const decodedToken = jwtDecode(token)
        console.log('Decoded Token:', decodedToken)
        localStorage.setItem('token', token)
        setLoginToken(decodedToken)        
        navigate('/')
      })
      .catch((error) => {
        console.error('Login failed:', error)
        setMessage(error.message)
        // Handle the error appropriately here
      })
  }
  return (
    <>
      {message && <div className='alert alert-danger'>{message}</div>}
      UserName:
      <input value={userName} onChange={(e) => setUserName(e.target.value)} />
      <br />
      Password:
      <input value={password} onChange={(e) => setPassword(e.target.value)} />
      <br />
      <button onClick={login}>Login</button>
    </>
  )
}

export default Login
