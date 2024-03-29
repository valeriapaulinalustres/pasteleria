import React, { useEffect, useRef } from 'react';
import { useIntersection } from "react-use";
import './contact.css';
import { gsap } from 'gsap';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { IoMdMail } from 'react-icons/io';
import { BsFillEnvelopeFill } from 'react-icons/bs';
import Wa from '../Wa/Wa';
import Logo from '../Logo/Logo';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin'

function Contact() {

  //scroll
  const sectionRef = useRef(null);
  const intersection = useIntersection(sectionRef, {
    root: null,
    rootMargin: "0px",
    threshold: 0.3
  });

  const fadeIn = element => {
    gsap.to(element, 1, {
      opacity: 1,
      y: -60,
      ease: "power4.out",
      stagger: {
        amount: 0.6
      }
    });
  };

  const fadeOut = element => {
    gsap.to(element, 1, {
      opacity: 0,
      y: -20,
      ease: "power4.out"
    });
  };

  intersection && intersection.intersectionRatio < 0.3
    ? fadeOut(".fadeIn")
    : fadeIn(".fadeIn");

  //specific animation
  const titleContact = useRef();
  const textContact = useRef();
  const refWa = useRef();
  const mapRef = useRef();
  const qContact = gsap.utils.selector(textContact);
  const qContactMap = gsap.utils.selector(mapRef);

  // store the timeline in a ref.
  const tl = useRef();
  const tlmap = useRef();


  gsap.registerPlugin(MotionPathPlugin);

  //photos and description
  useEffect(() => {
    gsap.to(titleContact.current, { y: 80, duration: 3 });
    gsap.to(refWa.current, { scale: 2 });


   
gsap.to(".envelope", {
  duration: 12, 
  repeat: 12,
  repeatDelay: 3,
  yoyo: true,
  ease: "power1.inOut",
  motionPath:{
    path: [{x:200, y:100}, {x:100, y:10}, {x:300, y:100}],
    align: [{x:200, y:100}, {x:100, y:10}, {x:300, y:100}],
    autoRotate: true,
    alignOrigin: [0.5, 0.5]
  }
});


    tl.current = gsap.timeline()
      .to(qContact(".contact-move"), {
        duration: 2,
        delay: 0.1,
        y: -40,
        stagger: 0.5,
        opacity: 1,
      })
    tlmap.current = gsap.timeline()
      .to(qContactMap(".map-moving"), {
        duration: 2,
        delay: 0.7,
        rotate: 360,
        stagger: 1,
        opacity: 1,
      })

      

  }, []);

  

  
  return (
    <div>
      <div className='subtitle-background'>
        <h2 ref={titleContact}>Contacto</h2>
     
      </div>
      <div className='contact-container'>
        <div ref={textContact}>
          <h4 className='contact-text-subtitle contact-move' >Contáctanos</h4>
          <h3 className='contact-text-subtitle contact-move' >Estamos en Ciudad Autónoma de Buenos Aires</h3>
          <div className='contact-contacts contact-move'>
            <div className='contact'>
              <h4 className='contact-text' >Dirección</h4>
              <div className='contact-icons-text' >
                <FaMapMarkerAlt className='contact-icon' />
                <p className='contact-text-body' >Córdoba 1223, CABA</p>
              </div>
            </div>
            <div className='contact'>
              <h4 className='contact-text' >Teléfono</h4>
              <div className='contact-icons-text' >
                <BsFillTelephoneFill className='contact-icon' />
                <p className='contact-text-body' >11 60127926</p>
              </div>
            </div>
            <div className='contact'>
              <h4 className='contact-text' >Mail</h4>
              <div className='contact-icons-text' >
                <IoMdMail className='contact-icon' />
                <p className='contact-text-body' >cjdemattia@yahoo.com.ar</p>
              </div>
            </div>
          </div>
        </div>
        <div ref={refWa}>
          <Wa />
        </div>
        <div ref={sectionRef} className='map-container'>
          <div className='fadeIn container-map' ref={mapRef}>
            <h4 className='map-move'>Cómo llegar:</h4>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.2053077036485!2d-58.38661178560918!3d-34.5989695804608!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bccac793b67363%3A0xb8b575d804e77449!2sAv.%20C%C3%B3rdoba%201223%2C%20C1055AAC%20CABA!5e0!3m2!1ses!2sar!4v1670349572265!5m2!1ses!2sar"
              loading="lazy" className='map mar-moving'></iframe>
          </div>
        </div>
        <Logo />
        <BsFillEnvelopeFill className='envelope' />
        
      </div>
     
    </div>
  )
}

export default Contact

