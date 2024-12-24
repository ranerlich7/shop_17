import React, { useState } from "react"
import { useNavigate } from "react-router-dom"

function Login() {
  const [userName, setUserName] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate() // Initialize navigate

  function login() {
    console.log(`login success with username: ${userName} password:${password}`)
    navigate("/")
  }
  return (
    <>
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
