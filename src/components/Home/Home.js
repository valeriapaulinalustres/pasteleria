import React, { useRef, useEffect } from "react";
import './home.css';
import { TimelineLite, Power2 } from "gsap";
import CSSRulePlugin from "gsap/CSSRulePlugin";
import Wa from '../Wa/Wa';
import ControlledCarousel from '../ControlledCarousel/ControlledCarousel';
import { GiStairsCake } from 'react-icons/gi';
import { SiCodechef } from 'react-icons/si';
import { GiDiploma } from 'react-icons/gi';
import { HiOutlineOfficeBuilding } from 'react-icons/hi';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { gsap } from 'gsap';

function Home() {


  let image = useRef(null);
  let container = useRef(null);
  let imageReveal = CSSRulePlugin.getRule(".img-container:after");

  let tl = new TimelineLite();

  useEffect(() => {
    tl.to(container, 0, { css: { visibility: "visible" } });
    tl.to(imageReveal, 1.4, { width: "0%", ease: Power2.easeInOut });
    tl.from(image, 1.4, {
      scale: 1.6,
      ease: Power2.easeInOut,
      delay: -1.4
    });
  });

  const onEnterCard = ({currentTarget}) => {
    gsap.to(currentTarget, { backgroundColor: "#ff7396", y:-20 });
  }
  const onLeaveCard = ({currentTarget}) => {
    gsap.to(currentTarget, { backgroundColor: "#ffffff" , y:20 });
  }

  const textHomeRef = useRef();
  const titleHomeRef = useRef();
  const textWaHomeRef = useRef();


  useEffect(() => {
    gsap.to(textHomeRef.current, { duration:1.5, repeat:3000, color: "#ce2f56" });
    gsap.to(titleHomeRef.current, { opacity: 1, duration:3, y:-80, color: "#ffffff" });
    
    gsap.to(textWaHomeRef.current, { duration:3, y:50 });
    
  }, [])
  





  return (
    <div className="home-container">
      <section className='main home-container-FirstSection'>
        <div className="container" ref={el => (container = el)}>
          <>
            <div className="img-container">
              <img
                ref={el => {
                  image = el;
                }}
                src="https://cdn.pixabay.com/photo/2017/09/14/14/33/cupcake-2749204__340.jpg"
              />
            </div>
          </>
        </div>
        <div className="home-first-container">
          <h2 ref={titleHomeRef} className="invisible">Disfrutá los sabores de la alta pastelería</h2>
          <div className="home-first-container-wa" ref={textWaHomeRef}>
          <p className= "home-first-text" ref={textHomeRef}>Escríbenos:</p>

          <Wa />
          </div>
          

        </div>

      </section>
      <section className="home-container-SecondSection">
        <div className="home-second-card" onMouseEnter={onEnterCard} onMouseLeave={onLeaveCard}>
          <GiDiploma className="home-second-icon"/>
          <p className="home-second-card-title">Productos de alta calidad</p>
          <p className="home-second-card-text">Certificaciones y habilitaciones vigentes</p>
        </div>
        <div className="home-second-card" onMouseEnter={onEnterCard} onMouseLeave={onLeaveCard}>
          <SiCodechef className="home-second-icon"/>
          <p className="home-second-card-title">Pasteleras profesionales</p>
          <p className="home-second-card-text">Con más de 15 años de experiencia en el rubro</p>
        </div>
        <div className="home-second-card" onMouseEnter={onEnterCard} onMouseLeave={onLeaveCard}>
          <GiStairsCake className="home-second-icon"/>
          <p className="home-second-card-title">Pasteles para eventos</p>
          <p className="home-second-card-text">Bodas, 15 años, cumpleaños</p>
        </div>
        <div className="home-second-card" onMouseEnter={onEnterCard} onMouseLeave={onLeaveCard}>
          <HiOutlineOfficeBuilding className="home-second-icon"/>
          <p className="home-second-card-title">Productos para empresas</p>
          <p className="home-second-card-text">Desayunos, meriendas y eventos empresariales</p>
        </div>
        <div className="home-second-card" onMouseEnter={onEnterCard} onMouseLeave={onLeaveCard}>
          <BsFillTelephoneFill className="home-second-icon"/>
          <p className="home-second-card-title">Comunicación directa 24/7</p>
          <p className="home-second-card-text">Escribinos por whatsapp cuando gustes</p>
        </div>
      </section>

    </div>

  )
}

export default Home