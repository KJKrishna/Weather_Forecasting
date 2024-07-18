import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div style={{display: 'flex', gap:'5rem', textDecoration: 'none', justifyContent:'center', backgroundColor:'black', padding:'3rem'}}>
     <Link to='/' style={{textDecoration:'none', color:'white'}}>Home</Link> 
     <Link to='/forecast' style={{textDecoration:'none', color:'white'}}>Forecast</Link>
     <Link to='/about' style={{textDecoration:'none', color:'white'}}>About</Link> 
    </div>
  )
}

export default NavBar
