import React from 'react';
import './navBar.css';
import { NavLink } from 'react-router-dom';


function NavBar() {
  return (
    <div>
      <nav>
        <p>logo</p>
        <h1>Mi Pastelería</h1>
      </nav>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/service">Service</NavLink>
        <NavLink to="/menu">Menu</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </nav>
    </div>
  )
}

export default NavBar
