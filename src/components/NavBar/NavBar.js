import React from 'react';
import './navBar.css';
import { NavLink } from 'react-router-dom';
import {RiCake3Line} from 'react-icons/ri';
import Wa from '../Wa/Wa';

function NavBar() {

  const styleLinks =({ isActive }) =>
  isActive
      ? {
          color: '#fff',
          background: '#ff7396',
          borderRadius: 8,
          paddingLeft: 6,
          paddingRight: 6,
      }
      : {
          color: '#fff',
         
      }


      

  return (
    <div className='navBar-container'>
      
        <NavLink to="/" className='nav-brand'>
        <RiCake3Line className='logo'/>
        <h1>Mi Pastelería</h1>
        </NavLink>
        
      
      <nav className='nav-menu'>
        <NavLink to="/" className="nav-links" style={styleLinks} >HOME</NavLink>
        <NavLink to="/about" className="nav-links" style={styleLinks}>NOSOTRAS</NavLink>
        <NavLink to="/service" className="nav-links" style={styleLinks}>SERVICIOS</NavLink>
        <NavLink to="/menu" className="nav-links" style={styleLinks}>PRODUCTOS</NavLink>
        <NavLink to="/contact" className="nav-links" style={styleLinks}>CONTACTO</NavLink>
        <Wa className='wa-navbar'/>
      </nav>
    </div>
  )
}

export default NavBar
