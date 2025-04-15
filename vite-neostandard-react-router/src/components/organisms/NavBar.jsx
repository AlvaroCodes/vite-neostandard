import React from 'react'
import { NavLink } from 'react-router'

const NavBar = () => {
  return (
    <nav>
      <NavLink to='/'>Home</NavLink>
      <NavLink to='/login'>Login</NavLink>
      <NavLink to='/private'>Private</NavLink>
    </nav>
  )
}

export default NavBar
