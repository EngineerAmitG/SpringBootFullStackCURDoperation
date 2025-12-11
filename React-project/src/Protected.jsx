import React from 'react'
import Home from './home/Home'
import Login from './login/Login'

const Protected = () => {
  return (
    localStorage.getItem("token")?<Home/>:<Login/>
  )
}

export default Protected