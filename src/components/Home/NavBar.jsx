import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  const linkStyle = {
    textDecoration:'none',
    color:'white',
    fontSize: '150%',
    fontWeight: 500
  }
  return (
    <div style={{display: 'flex', gap:'5rem', textDecoration: 'none', justifyContent:'center', background:'linear-gradient(to left, #00bfffd4, #bb33d3b0, #5656c3fa, #986a6a)', padding:'3rem'}}>
     <Link to='/' style={linkStyle}>Home</Link> 
     <Link to='/forecast' style={linkStyle}>Forecast</Link>
     <Link to='/about' style={linkStyle}>About</Link> 
    </div>
  )
}

export default NavBar
