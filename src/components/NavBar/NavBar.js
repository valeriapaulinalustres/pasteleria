import React, { useEffect } from 'react';
import './navBar.css';
import { NavLink } from 'react-router-dom';
import { RiCake3Line } from 'react-icons/ri';
import Wa from '../Wa/Wa';
import { TextPlugin } from 'gsap/TextPlugin.js';
import { gsap } from 'gsap';
import Logo from "../Logo/Logo";

function NavBar() {

  const styleLinks = ({ isActive }) =>
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

  useEffect(() => {
    //register Text Plugin
    gsap.registerPlugin(TextPlugin);

    gsap.to("h1", {
      duration: 10,
      text: {
        value: "Mi Pastelería",
        padSpace: true,
      },
      ease: "power2",
      repeat: 10,
    });
  }, [])

  const mouseEnter = ({ currentTarget }) => {
    gsap.to(currentTarget, { color: "#ce2f56" });
  };
  const mouseLeave = ({ currentTarget }) => {
    gsap.to(currentTarget, { color: "#ffffff" });
  };


  return (
    <div className='navBar-container'>
      <NavLink to="/" className='nav-brand'>

        <Logo />
        <h1></h1>
      </NavLink>
      <nav className='nav-menu'>
        <NavLink to="/" className="nav-links" onMouseEnter={mouseEnter} onMouseLeave={mouseLeave} style={styleLinks} >HOME</NavLink>
        <NavLink to="/about" className="nav-links" onMouseEnter={mouseEnter} onMouseLeave={mouseLeave} style={styleLinks}>NOSOTRAS</NavLink>
        <NavLink to="/menu" className="nav-links" onMouseEnter={mouseEnter} onMouseLeave={mouseLeave} style={styleLinks}>MENÚ</NavLink>
        <NavLink to="/contact" className="nav-links" onMouseEnter={mouseEnter} onMouseLeave={mouseLeave} style={styleLinks}>CONTACTO</NavLink>
        <Wa className='wa-navbar' />
      </nav>     
    </div>
  )
}

export default NavBar

/*
 <RiCake3Line className='logo' />
 */
