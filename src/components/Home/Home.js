import React, { useRef, useEffect } from "react";
import './home.css';
import { TimelineLite, Power2 } from "gsap";
import CSSRulePlugin from "gsap/CSSRulePlugin";
import Wa from '../Wa/Wa';
import { GiStairsCake } from 'react-icons/gi';
import { SiCodechef } from 'react-icons/si';
import { GiDiploma } from 'react-icons/gi';
import { HiOutlineOfficeBuilding } from 'react-icons/hi';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { gsap } from 'gsap';
import { motion } from 'framer-motion';
import { ScrollTrigger } from 'gsap/ScrollTrigger.js';
import { useIntersection } from "react-use";
import CSSPlugin from "gsap/CSSPlugin";
import Logo from "../Logo/Logo";


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

  const onEnterCard = ({ currentTarget }) => {
    gsap.to(currentTarget, { backgroundColor: "#ff7396", y: -20 });
  }
  const onLeaveCard = ({ currentTarget }) => {
    gsap.to(currentTarget, { backgroundColor: "#ffffff", y: 20 });
  }
  const mouseMove = ({ currentTarget }) => {
    gsap.to(currentTarget, { backgroundColor: "#ff7396", y: -20 });
  }

  const textHomeRef = useRef();
  const titleHomeRef = useRef();
  const textWaHomeRef = useRef();
  const secondSectionRef = useRef(null);
  const thirdSectionRef = useRef(null);
  const fourthSectionRef = useRef(null);
  const fifthSectionRef = useRef(null);
  const sixthSectionRef = useRef(null);
  const seventhSectionRef = useRef(null);

  gsap.registerPlugin(ScrollTrigger);
  gsap.registerPlugin(CSSPlugin, CSSRulePlugin)

  useEffect(() => {
    gsap.to(textHomeRef.current, { duration: 1.5, repeat: 3000, color: "#ce2f56" });
    gsap.to(titleHomeRef.current, { opacity: 1, duration: 5, y: -80, color: "#ffffff" });
    gsap.to(textWaHomeRef.current, { duration: 6, y: 20 });
  }, [])

  //scroll second section
  const intersectionSecond = useIntersection(secondSectionRef, {
    root: null,
    rootMargin: "0px",
    threshold: 0.8
  });
  const fadeInSecond = element => {
    gsap.to(element, 1, {
      opacity: 1,
      y: -80,
      ease: "power4.out",
      duration: 3,
      stagger: {
        amount: 0.6
      }
    });
  };
  const fadeOutSecond = element => {
    gsap.to(element, 1, {
      opacity: 0,
      y: -20,
      ease: "power4.out",
    });
  };
  intersectionSecond && intersectionSecond.intersectionRatio < 0.8
    ? fadeOutSecond(".fadeInSecond")
    : fadeInSecond(".fadeInSecond");

  //scroll third section
  const intersectionThird = useIntersection(thirdSectionRef, {
    root: null,
    rootMargin: "0px",
    threshold: 0.5
  });
  const fadeInThird = element => {
    gsap.to(element, 1, {
      opacity: 1,
      backgroundColor: "#ce2f56",
      ease: "power4.out",
      duration: 3,
      stagger: {
        amount: 0.6
      }
    });
  };
  const fadeOutThird = element => {
    gsap.to(element, 1, {
      opacity: 0,
      backgroundColor: "#ffffff",
      ease: "power4.out",
    });
  };
  intersectionThird && intersectionThird.intersectionRatio < 0.5
    ? fadeOutThird(".fadeInThird")
    : fadeInThird(".fadeInThird");

  //scroll fourth section
  const intersectionFourth = useIntersection(fourthSectionRef, {
    root: null,
    rootMargin: "0px",
    threshold: 0.5
  });
  const fadeIn = element => {
    gsap.to(element, 1, {
      opacity: 1,
      y: -80,
      ease: "power4.out",
      duration: 3,
      stagger: {
        amount: 0.6
      }
    });
  };
  const fadeOut = element => {
    gsap.to(element, 1, {
      opacity: 0,
      y: -20,
      ease: "power4.out",
    });
  };
  intersectionFourth && intersectionFourth.intersectionRatio < 0.5
    ? fadeOut(".fadeIn")
    : fadeIn(".fadeIn");

  //scroll fifth section
  const intersectionFifth = useIntersection(fifthSectionRef, {
    root: null,
    rootMargin: "0px",
    threshold: 0.5
  });
  const fadeInFifth = element => {
    gsap.to(element, 1, {
      opacity: 1,
      y: -80,
      ease: "power4.out",
      duration: 3,
      stagger: {
        amount: 0.6
      }
    });
  };
  const fadeOutFifth = element => {
    gsap.to(element, 1, {
      opacity: 0,
      y: -20,
      ease: "power4.out",
    });
  };
  intersectionFifth && intersectionFifth.intersectionRatio < 0.5
    ? fadeOutFifth(".fadeInFifth")
    : fadeInFifth(".fadeInFifth");

  //scroll sixth section
  const intersectionSixth = useIntersection(sixthSectionRef, {
    root: null,
    rootMargin: "0px",
    threshold: 0.5
  });
  const fadeInSixth = element => {
    gsap.to(element, 1, {
      opacity: 1,
      y: -80,
      ease: "power4.out",
      duration: 3,
      stagger: {
        amount: 0.6
      }
    });
  };
  const fadeOutSixth = element => {
    gsap.to(element, 1, {
      opacity: 0,
      y: -20,
      ease: "power4.out",

    });
  };
  intersectionSixth && intersectionSixth.intersectionRatio < 0.5
    ? fadeOutSixth(".fadeInSixth")
    : fadeInSixth(".fadeInSixth");

  //scroll seventh section 
  const intersectionSeventh = useIntersection(seventhSectionRef, {
    root: null,
    rootMargin: "0px",
    threshold: 0.5
  });
  const fadeInSeventh = element => {
    gsap.to(element, 1, {
      opacity: 1,
      y: -80,
      ease: "power4.out",
      duration: 3,
      stagger: {
        amount: 0.6
      }
    });
  };
  const fadeOutSeventh = element => {
    gsap.to(element, 1, {
      opacity: 0,
      y: -20,
      ease: "power4.out",

    });
  };
  intersectionSeventh && intersectionSeventh.intersectionRatio < 0.5
    ? fadeOutSeventh(".fadeInSeventh")
    : fadeInSeventh(".fadeInSeventh");


    gsap.registerPlugin(ScrollTrigger);

    let getRatio = el => window.innerHeight / (window.innerHeight + el.offsetHeight);
    
    gsap.utils.toArray(".sectionParallax").forEach((section, i) => {
      section.bg = section.querySelector(".bg"); 
    
      // Give the backgrounds some random images
      section.bg.style.backgroundImage = `url(https://www.artchitectours.es/wp-content/uploads/2019/01/Argentina-Puerto-Madero-004.jpg)`;
      
      // the first image (i === 0) should be handled differently because it should start at the very top.
      // use function-based values in order to keep things responsive
      gsap.fromTo(section.bg, {
        backgroundPosition: () => i ? `50% ${-window.innerHeight * getRatio(section)}px` : "50% 0px"
      }, {
        backgroundPosition: () => `50% ${window.innerHeight * (1 - getRatio(section))}px`,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: () => i ? "top bottom" : "top top", 
          end: "bottom top",
          scrub: true,
          invalidateOnRefresh: true // to make it responsive
        }
    
    
      });
    
    });
    


  return (
    <motion.div
      className="home-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
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
          <h2 ref={titleHomeRef} className="padding">Disfrutá los sabores de la alta pastelería</h2>
          <Logo />
          <div className="home-first-container-wa" ref={textWaHomeRef}>
            <p className="home-first-text" ref={textHomeRef}>Escribinos:</p>
            <Wa />
          </div>
        </div>
      </section>

      <section className="home-container-SecondSection" ref={secondSectionRef}>
        <div className="home-second-card fadeInSecond" onMouseEnter={onEnterCard} onMouseLeave={onLeaveCard}>
          <GiDiploma className="home-second-icon" />
          <p className="home-second-card-title">Productos de alta calidad</p>
          <p className="home-second-card-text">Certificaciones y habilitaciones vigentes</p>
        </div>
        <div className="home-second-card fadeInSecond" onMouseEnter={onEnterCard} onMouseLeave={onLeaveCard}>
          <SiCodechef className="home-second-icon" />
          <p className="home-second-card-title">Pasteleras profesionales</p>
          <p className="home-second-card-text">Con más de 15 años de experiencia en el rubro</p>
        </div>
        <div className="home-second-card fadeInSecond" onMouseEnter={onEnterCard} onMouseLeave={onLeaveCard}>
          <GiStairsCake className="home-second-icon" />
          <p className="home-second-card-title">Pasteles para eventos</p>
          <p className="home-second-card-text">Bodas, 15 años, cumpleaños</p>
        </div>
        <div className="home-second-card fadeInSecond" onMouseEnter={onEnterCard} onMouseLeave={onLeaveCard}>
          <HiOutlineOfficeBuilding className="home-second-icon" />
          <p className="home-second-card-title">Productos para empresas</p>
          <p className="home-second-card-text">Desayunos, meriendas y eventos empresariales</p>
        </div>
        <div className="home-second-card fadeInSecond" onMouseEnter={onEnterCard} onMouseLeave={onLeaveCard}>
          <BsFillTelephoneFill className="home-second-icon" />
          <p className="home-second-card-title">Comunicación directa 24/7</p>
          <p className="home-second-card-text">Escribinos por whatsapp cuando gustes</p>
        </div>
      </section>

      <section ref={thirdSectionRef} className="home-container-Third">
        <div className="home-container-ThirdSection fadeInThird">
          <p className="text-home-third">Recibimos tu pedido por whatsapp</p>
          <Wa className="fadeInThird" />
        </div>
      </section>

      

      <section className="home-container-fourthSection" ref={fourthSectionRef}>
        <div className="img-fourth-home-container fourth-section-img-text fadeIn"><img src="https://cdn.pixabay.com/photo/2015/02/17/15/33/wedding-cake-639516__340.jpg" className="crop" alt="torta de bodas" width="100%"></img></div>
        <h5 className="text-fourth-home fourth-section-img-text fadeIn">Pastelería para eventos</h5>
      </section>

      <section className="home-container-fifthSection" ref={fifthSectionRef}>
        <h5 className="text-fifth-home fifth-section-img-text fadeInFifth">Meriendas empresariales</h5>
        <div className="img-fifth-home-container fifth-section-img-text fadeInFifth"><img src="https://cdn.pixabay.com/photo/2016/11/06/14/44/a-variety-of-cakes-1803074__340.jpg" className="crop" alt="torta de bodas" width="100%"></img></div>
      </section>

      <section className="home-container-sixthSection" ref={sixthSectionRef}>
        <div className="img-sixth-home-container sixth-section-img-text fadeInSixth"><img src="https://cdn.pixabay.com/photo/2017/12/07/16/37/gingerbreads-3004118__340.jpg" className="crop" alt="torta de bodas" width="100%"></img></div>
        <h5 className="text-sixth-home sixth-section-img-text fadeInSixth">Cookies especiales</h5>
      </section>

      <section className="home-container-seventhSection" ref={seventhSectionRef}>
        <h5 className="text-seventh-home seventh-section-img-text fadeInSeventh">Decoración de pasteles</h5>
        <div className="img-seventh-home-container seventh-section-img-text fadeInSeventh"><img src="https://media.istockphoto.com/photos/flower-cake-picture-id157195431?k=20&m=157195431&s=612x612&w=0&h=wP5ITigdeCnihTnN_pJuPIpt8PfVGajezs69igzm-PM=" className="crop" alt="torta de bodas" width="100%"></img></div>
      </section>

      <section className="sectionParallax">
  <div className="bg"></div>
  <h2>Te esperamos</h2>
</section>
<Logo />
    </motion.div>
  )
}

export default Home