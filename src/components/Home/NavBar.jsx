import React from 'react'
import { Link } from 'react-router-dom'
import './NavBar.css'

const NavBar = () => {
  const linkStyle = {
    textDecoration:'none',
    color:'white',
    fontSize: '150%',
    fontWeight: 500
  }
  return (
    <div className='navBar'>
     <Link to='/' style={linkStyle}>Home</Link> 
     <Link to='/forecast' style={linkStyle}>Forecast</Link>
     <Link to='/about' style={linkStyle}>About</Link> 
    </div>
  )
}

export default NavBar
