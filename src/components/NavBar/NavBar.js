import React from 'react';
import './navBar.css';
import { NavLink } from 'react-router-dom';


function NavBar() {
  return (
    <div className='navBar-container'>
      <nav className='nav-brand'>
        <p>logo</p>
        <h1>Mi Pastelería</h1>
      </nav>
      <nav className='nav-menu'>
        <NavLink to="/" className="nav-links">Home</NavLink>
        <NavLink to="/about" className="nav-links">About</NavLink>
        <NavLink to="/service" className="nav-links">Service</NavLink>
        <NavLink to="/menu" className="nav-links">Menu</NavLink>
        <NavLink to="/contact" className="nav-links">Contact</NavLink>
      </nav>
    </div>
  )
}

export default NavBar
