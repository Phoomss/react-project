import React from 'react'
import './Navbar.css'
import { NavLink } from 'react-router-dom'
const Navbar = () => {
  return (
    <nav className="navbar ">
      <div className="container">
        <h3 className="logo">LAT | STORE</h3>

        <ul className="nav-links">
          <li>
            <NavLink className="nav-link" to="/">
            Home
            </NavLink>
          </li>
          <li> 
            <NavLink className="nav-link" to="/product">
                Product
            </NavLink>
          </li>
          <li>
            <NavLink className="nav-link" to="/contact">
              Contact
            </NavLink>
          </li>
          <div className="login">
          <li> 
            <NavLink className="nav-link" to="/sing in">
              Sing In
            </NavLink>
          </li>
          <li> 
            <NavLink className="nav-link" to="/sing up">
              Sing Up
            </NavLink>
          </li>
          </div>
         
        </ul>
      </div>
    </nav>
  )
}

export default Navbar