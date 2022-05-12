import React from 'react';
import './footer.css';
import { NavLink } from 'react-router-dom';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { IoMdMail } from 'react-icons/io';
import { RiFacebookCircleLine } from 'react-icons/ri';
import { RiInstagramLine } from 'react-icons/ri';
import { BsWhatsapp } from 'react-icons/bs';

function Footer() {
    return (
        <div className='footer'>
<div className='footer-container'>
            <div>
                <h2>Company</h2>
                <nav className='footer-menu'>
                    <NavLink to="/" className="nav-links">Home</NavLink>
                    <NavLink to="/about" className="nav-links">About</NavLink>
                    <NavLink to="/service" className="nav-links">Service</NavLink>
                    <NavLink to="/menu" className="nav-links">Menu</NavLink>
                    <NavLink to="/contact" className="nav-links">Contact</NavLink>
                </nav>

            </div>
            <div>
                <h2>Contacto</h2>
                <div className='footer-contact'>
                    <FaMapMarkerAlt className='footer-icon' />
                    <p>dirección</p>
                </div>
                <div className='footer-contact'>
                    <BsFillTelephoneFill className='footer-icon' />
                    <p>11 60127926</p>

                </div>
                <div className='footer-contact'>
                    <IoMdMail className='footer-icon' />
                    <p>cjdemattia@yahoo.com.ar</p>
                </div>
                <div className='footer-contact'>
                    <RiFacebookCircleLine className='footer-icon-socialMedia' />
                    <RiInstagramLine className='footer-icon-socialMedia' />
                </div>

            </div>
            <div>
                <h2>Abierto</h2>
                <p>Martes - Viernes</p>
                <p>15 a 20 hs</p>
                <p>Sábados y Domingos</p>
                <p>11 a 19 hs</p>

            </div>
            <div>
                <h2>Escribinos</h2>
                <a href="https://wa.me/5491160127926/?text=Hola%20Mi%20Pastelería" target="_blank"
                ><button><BsWhatsapp /></button></a>
            </div>
        </div>
        <p>© Mi Pastelería, All Right Reserved.</p>
        </div>
        
    )
}

export default Footer