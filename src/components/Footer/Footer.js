import React from 'react';
import './footer.css';
import { NavLink } from 'react-router-dom';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { IoMdMail } from 'react-icons/io';
import { RiFacebookCircleLine } from 'react-icons/ri';
import { RiInstagramLine } from 'react-icons/ri';
import { BsWhatsapp } from 'react-icons/bs';
import Wa from '../Wa/Wa';
import { gsap } from 'gsap';

function Footer() {

    const styleLinksFooter = ({ isActive }) =>
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

            const mouseEnter = ({ currentTarget }) => {
                gsap.to(currentTarget, { color: "#ce2f56" });
              };
              const mouseLeave = ({ currentTarget }) => {
                gsap.to(currentTarget, { color: "#ffffff" });
              };
            
            
    return (
        <div className='footer'>
            <div className='footer-container'>
                <div>
                    <h5>Company</h5>
                    <nav className='footer-menu'>
                        <NavLink to="/" className="nav-links" onMouseEnter={mouseEnter} onMouseLeave={mouseLeave} style={styleLinksFooter}>Home</NavLink>
                        <NavLink to="/about" className="nav-links"onMouseEnter={mouseEnter} onMouseLeave={mouseLeave}  style={styleLinksFooter}>Nosotras</NavLink>
                        <NavLink to="/menu" className="nav-links" onMouseEnter={mouseEnter} onMouseLeave={mouseLeave} style={styleLinksFooter}>Menú</NavLink>
                        <NavLink to="/contact" className="nav-links"onMouseEnter={mouseEnter} onMouseLeave={mouseLeave}  style={styleLinksFooter}>Contacto</NavLink>
                    </nav>

                </div>
                <div>
                    <h5>Contacto</h5>
                    <div className='footer-contact'>
                        <FaMapMarkerAlt className='footer-icon' />
                        <p className='footer-text' >dirección</p>
                    </div>
                    <div className='footer-contact'>
                        <BsFillTelephoneFill className='footer-icon' />
                        <p className='footer-text' >11 60127926</p>

                    </div>
                    <div className='footer-contact'>
                        <IoMdMail className='footer-icon' />
                        <p className='footer-text' >cjdemattia@yahoo.com.ar</p>
                    </div>
                    <div className='footer-contact'>
                        <RiFacebookCircleLine className='footer-icon-socialMedia' />
                        <RiInstagramLine className='footer-icon-socialMedia' />
                    </div>

                </div>
                <div>
                    <h5>Abierto</h5>
                    <p className='footer-text' >Martes - Viernes</p>
                    <p className='footer-text' >15 a 20 hs</p>
                    <p className='footer-text' >Sábados y Domingos</p>
                    <p className='footer-text' >11 a 19 hs</p>

                </div>
                <div>
                    <h5>Escribinos</h5>
                    <Wa />

                </div>
            </div>
            <p className='copyright'>© Mi Pastelería, All Right Reserved.</p>
        </div>

    )
}

export default Footer