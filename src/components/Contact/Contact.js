import React, { useEffect, useRef } from 'react';
import './contact.css';
import { gsap } from 'gsap';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { IoMdMail } from 'react-icons/io';

function Contact() {


  const titleContact = useRef();
  const textContact = useRef();
  const qContact = gsap.utils.selector(textContact);


  // store the timeline in a ref.
  const tl = useRef();



  //photos and description
  useEffect(() => {
    gsap.to(titleContact.current, { y: 20 });

    tl.current = gsap.timeline()
      .to(qContact(".contact-text-subtitle"), {
        duration: 1.5,
        delay: 0.5,
        y: 20,
        stagger: 1,
      })

  }, []);


  return (
    <div>
      <div className='subtitle-background'>
        <h2 ref={titleContact}>Nosotras</h2>

      </div>
      <div className='contact-container'>
      <div ref={textContact}>
        <h4 className='contact-text-subtitle' >Contáctanos</h4>
        <h3 className='contact-text-subtitle' >Estamos en Ciudad Autónoma de Buenos Aires</h3>
      </div>
      <div className='contact-contacts'>
        <div className='footer-contact'>
          <h4 className='contact-text' >Dirección</h4>
          <div className='contact-icons-text' >
            <FaMapMarkerAlt className='contact-icon' />
            <p className='contact-text-body' >Córdoba 1223, CABA</p>
          </div>

        </div>
        <div className='footer-contact'>
          <h4 className='contact-text' >Teléfono</h4>
          <div className='contact-icons-text' >
            <BsFillTelephoneFill className='contact-icon' />
            <p className='contact-text-body' >11 60127926</p>
          </div>


        </div>
        <div className='footer-contact'>
          <h4 className='contact-text' >Mail</h4>
          <div className='contact-icons-text' >
            <IoMdMail className='contact-icon' />
            <p className='contact-text-body' >cjdemattia@yahoo.com.ar</p>
          </div>

        </div>

      </div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3283.235528120289!2d-58.601596985020194!3d-34.62348788045437!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb861c3359a83%3A0x80cb954382f92285!2sDinamarca%201755%2C%20B1685EJS%20El%20Palomar%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses!2sar!4v1639222449545!5m2!1ses!2sar"
       loading="lazy" className='map'></iframe>


      </div>
     


    </div>

  )
}

export default Contact