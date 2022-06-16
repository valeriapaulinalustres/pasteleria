import React, { useEffect, useRef, useState } from 'react';
import { useIntersection } from "react-use";
import './about.css';
import { gsap } from 'gsap';
import Wa from '../Wa/Wa';
import { AiFillInstagram } from 'react-icons/ai';
import { motion } from 'framer-motion';
import { TextPlugin } from 'gsap/TextPlugin.js';
import {Flip} from 'gsap/Flip'

function About() {

  const aboutImgOneRef = useRef();
  const aboutImgTwoRef = useRef();
  const aboutTextRef = useRef();
  const aboutTitle = useRef();
  const nameChefRef = useRef();
  const chefIconRef = useRef();
  const nameChefTwoRef = useRef();
  const chefIconTwoRef = useRef();

  //scroll
  const sectionRefAbout = useRef(null);

  const intersection = useIntersection(sectionRefAbout, {
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

  intersection && intersection.intersectionRatio < 0.5
    ? fadeOut(".fadeIn")
    : fadeIn(".fadeIn");


  //scroll and change the color of the text
  const intersectionAboutText = useIntersection(aboutTextRef, {
    root: null,
    rootMargin: "0px",
    threshold: 0.8
  });

  const fadeInAboutText = element => {
    gsap.to(element, 1, {
      color: "#ce2f56",
      ease: "power4.out",
      duration: 3,

    });
  };

  const fadeOutAboutText = element => {
    gsap.to(element, 1, {
      color: "#444444",
      ease: "power4.out",
    });
  };

  intersectionAboutText && intersectionAboutText.intersectionRatio < 0.8
    ? fadeOutAboutText(".paragraph")
    : fadeInAboutText(".paragraph");

  //specific animations
  const aboutImgOne = gsap.utils.selector(aboutImgOneRef);
  const aboutImgTwo = gsap.utils.selector(aboutImgTwoRef);
  const aboutText = gsap.utils.selector(aboutTextRef);

  // store the timeline in a ref.
  const tl = useRef();

  //cheff photos:
  const onEnterChef = ({ currentTarget }) => {
    gsap.to(currentTarget, { scale: 1.3 });
    gsap.to(nameChefRef.current, { x: 20, y: 40, opacity: 1, delay: 0.3, duration: 2 });
    gsap.to(chefIconRef.current, { x: 70, y: 60, opacity: 1, delay: 0.5, duration: 1 });
  };
  const onEnterChefTwo = ({ currentTarget }) => {
    gsap.to(currentTarget, { scale: 1.3 });
    gsap.to(nameChefTwoRef.current, { x: 120, y: 100, opacity: 1, delay: 0.3, duration: 2 });
    gsap.to(chefIconTwoRef.current, { x: 70, y: 60, opacity: 1, delay: 0.5, duration: 1 });
  };
  const onLeaveChef = ({ currentTarget }) => {
    gsap.to(currentTarget, { scale: 1, });
    gsap.to(nameChefRef.current, { x: -20, y: -40, opacity: 0, delay: 0.3, duration: 1, });
    gsap.to(chefIconRef.current, { x: 100, y: -60, opacity: 0, delay: 0.5, duration: 1 });
  };
  const onLeaveChefTwo = ({ currentTarget }) => {
    gsap.to(currentTarget, { scale: 1 });

    gsap.to(nameChefTwoRef.current, { x: -20, y: -40, opacity: 0, delay: 0.3, duration: 1, });
    gsap.to(chefIconTwoRef.current, { x: 100, y: -60, opacity: 0, delay: 0.5, duration: 1 });
  };

  //photos and description
  useEffect(() => {
    gsap.to(aboutTitle.current, { y: 80, duration: 3 });
    gsap.registerPlugin(TextPlugin);
    gsap.to(".welcome", {
      duration: 3,
      text: {
        value: "Bienvenidos a Mi Pastelería",
        padSpace: true,
      },
      ease: "power2",
      repeat: 2,
    });

    tl.current = gsap.timeline()
      .to(aboutImgTwo(".imgDown"), {
        duration: 1.5,
        opacity: 1,
        scale: 1,
        delay: 0.5,
        stagger: 1,
      })
      .to(aboutImgOne(".imgUp"), {
        duration: 2,
        opacity: 1,
        scale: 1,
        stagger: 0.5,
      }, "-=1")
      .to(aboutText(".about-text"), {
        duration: 4,
        y: -20,
        stagger: 0.3,
        opacity: 1,
      }, "-=2.5")
      .to(aboutImgTwo(".imgFour"), {
        duration: 2,
        rotate: 360,
      }, "-=1")
      .to(aboutText(".about-button"), {
        duration: 3,
        y: 310,
        scale: 3,
        opacity: 1,
      }, "-=3.5")
      .to(aboutImgOne(".imgOne"), {
        duration: 2,
        rotate: 360,
      })
      .to(aboutImgOne(".imgOne"), {
        duration: 2,
        rotate: 360,
      })
      .to(aboutImgOne(".imgTwo"), {
        duration: 2,
        rotate: 360,
      }, "-=1")
      .to(aboutImgTwo(".imgThree"), {
        duration: 2,
        rotate: 360,
      })
      .to(aboutImgTwo(".imgFour"), {
        duration: 2,
        rotate: 360,
      }, "-=1")
      .to(aboutText(".about-button"), {
        duration: 4,
        rotate: 360,
        repeat: 40,
        delay: 1,
      })
  }, []);


  




  return (
    <motion.div className='about-container'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}>
      <div className='subtitle-background'>
        <h2 ref={aboutTitle}>Nosotras</h2>
      </div>

      <section className='about-pastry'>
        <div className='about-cakes' ref={aboutImgOneRef} >
          <img src="https://cdn.pixabay.com/photo/2022/05/03/20/01/black-forest-cake-7172587__340.jpg" alt="torta selva negra" width="100%" className='about-image imgUp imgOne shadow' />
          <img src="https://media.istockphoto.com/photos/tartlet-with-lemon-cream-and-meringue-picture-id874445758?b=1&k=20&m=874445758&s=170667a&w=0&h=CQAZIrdbQB9VC3rVFbzOGzkLhOzuwCstf_vBmqe1_vI=" alt="lemon pie" width="100%" className='about-image imgUp imgTwo shadow' />
        </div>
        <div ref={aboutTextRef} className="about-pastry-text">
          <h4 className='about-text'>Sobre nosotras</h4>
          <h3 className='about-text welcome'></h3>
          <p className='about-text paragraph'>Somos un equipo de pasteleras apasionadas por nuestra profesión. </p>
          <p className='about-text paragraph'>Con más de 10 años de experiencia en el rubro, nos dedicamos a servir a empresas, eventos y clientes particulares. </p>
          <p className='about-text paragraph'>Elaboramos en forma casera los productos más famosos de la pastelería. </p>
          <div>
          </div>
          <Wa />
        </div>
        <div className='about-cakes' ref={aboutImgTwoRef}>
          <img src="https://cdn.pixabay.com/photo/2022/04/07/20/34/sponge-cake-7118242__340.jpg" alt="torta de bodas" width="100%" className='about-image imgDown imgThree imgSix shadow' />
          <img src="https://media.istockphoto.com/photos/traditional-argentinian-alfajores-picture-id1180243264?b=1&k=20&m=1180243264&s=170667a&w=0&h=fwBUASfR3OI9xjjHcZqoPBXMtjkxlhKj0jG-TMfeOfM=" alt="alfajores" width="100%" className='about-image imgDown imgFour shadow alfajores' />
        </div>
      </section>

      <section className='about-team ' ref={sectionRefAbout}>
        <h4 className='text-center fadeIn'>El equipo</h4>
        <h3 className='text-center fadeIn'>Nuestras pasteleras</h3>
        <div className='about-team-img'>
          <div className='container-img-chef fadeIn' onMouseEnter={onEnterChef} onMouseLeave={onLeaveChef} >
            <img src="https://media.istockphoto.com/photos/young-beautiful-smiling-woman-chef-with-arms-crossed-at-kitchen-picture-id1298088270?b=1&k=20&m=1298088270&s=170667a&w=0&h=uHmRibes_rtOLmzFECXfGxSgo_OzLbX2rl9PWNaU5AE=" alt="pastelera" className='crop' />
            <h4 className='name-chef' ref={nameChefRef}>Laura</h4>
            <div ref={chefIconRef}><AiFillInstagram className='chef-icon' /></div>
          </div>
          <div className='container-img-chef fadeIn' onMouseEnter={onEnterChefTwo} onMouseLeave={onLeaveChefTwo}>
            <img src="https://media.istockphoto.com/photos/woman-decorating-the-pink-cake-she-has-prepared-picture-id1343850183?b=1&k=20&m=1343850183&s=170667a&w=0&h=x73Rp7WXxL6hcT7Gb6iKGm67t2xB-TpCzIPCm84lc-M=" alt="pastelera" className='crop' />
            <h4 className='name-chef' ref={nameChefTwoRef}>Gabriela</h4>
            <div ref={chefIconTwoRef}><AiFillInstagram className='chef-icon' /></div>
          </div>
        </div>
      </section>
     
    </motion.div>
  )
}

export default About