import React, { useEffect, useRef, useState } from 'react';
import './about.css';
import { gsap } from 'gsap';
import Wa from '../Wa/Wa';




function About() {


  const el = useRef();
  const elText = useRef();
  const elChef = useRef();
  const elTitle = useRef();
  const q = gsap.utils.selector(el);
  const qText = gsap.utils.selector(elText);
  const qChef = gsap.utils.selector(elChef);

  // store the timeline in a ref.
  const tl = useRef();

  

  //chef photos:
  const onEnterChef = ({ currentTarget }) => {
    gsap.to(currentTarget, { scale: 1.3 });
  };
  const onLeaveChef = ({ currentTarget }) => {
    gsap.to(currentTarget, { scale: 1 });
  };

//photos and description
  useEffect(() => {
    gsap.to(elTitle.current, { y:20 });
   
    tl.current = gsap.timeline()
      .to(q(".imgOne"), {
        duration: 1.5,
        opacity: 1,
        scale: 1,
        delay: 0.5,
        x: 400,
        stagger: 1,


      })
      .to(q(".imgTwo"), {
        duration: 2,
        opacity: 1,
        scale: 1,
        stagger: 0.5,
        x: 80,

      },"-=1")

      .to(qText(".about-text"), {
        duration: 3,
        y:200,
        stagger: 0.3,
        opacity: 1,
        

      }, "-=2.5")

      .to(qText(".about-button"), {
        duration: 2,
        x:100,
        y: 200,
        scale:2,
        opacity: 1,
       
        

      }, "-=2.5")

      .to(q(".imgFour"), {
        duration: 1,
        y: 218,

      }, "-=1")

     
      .to(q(".imgFive"), {
        duration: 1,
        y: -218,

      })

      tl.current = gsap.timeline()
    .to(qChef(".chef-move"), {
      duration: 2,
      opacity: 1,
      delay: 0.5,
      y: -50,
      stagger: 1,


    }, "+=4")



     
  }, []);




  return (
    <div className='about-container'>
      <div className='subtitle-background'>
        <h2 ref={elTitle}>Nosotras</h2>

      </div>

      <div className='about-pastry'>
        <div className='about-cakes' ref={el} >
          <img src="https://cdn.pixabay.com/photo/2022/05/03/20/01/black-forest-cake-7172587__340.jpg" alt="torta selva negra" width="100%" className='about-image imgOne imgFour' />
          <img src="https://media.istockphoto.com/photos/tartlet-with-lemon-cream-and-meringue-picture-id874445758?b=1&k=20&m=874445758&s=170667a&w=0&h=CQAZIrdbQB9VC3rVFbzOGzkLhOzuwCstf_vBmqe1_vI=" alt="lemon pie" width="100%" className='about-image imgTwo' />
          <img src="https://cdn.pixabay.com/photo/2022/04/07/20/34/sponge-cake-7118242__340.jpg" alt="torta de bodas" width="100%" className='about-image imgOne ' />
          <img src="https://media.istockphoto.com/photos/traditional-argentinian-alfajores-picture-id1180243264?b=1&k=20&m=1180243264&s=170667a&w=0&h=fwBUASfR3OI9xjjHcZqoPBXMtjkxlhKj0jG-TMfeOfM=" alt="alfajores" width="100%" className='about-image imgTwo imgFive' />
        </div>

        <div ref={elText} className="about-pastry-text">
          <h4 className='about-text'>Sobre nosotras</h4>
          <h3 className='about-text'>Bienvenidos a Mi Pastelería</h3>
          <p className='about-text paragraph'>lorem ipsum jnltdr trcvhjb vtctycutyyub vfctrxdrxe drtfvgh</p>
          <div>

          </div>
          <Wa />
         
        </div>
      </div>
      <div className='about-team'>
        <h4 className='text-center'>El equipo</h4>
        <h3 className='text-center'>Nuestras pasteleras</h3>
        <div className='about-team-img' ref={elChef}>
          <div className='container-img-chef chef-move' onMouseEnter={onEnterChef} onMouseLeave={onLeaveChef} >
          <img src="https://media.istockphoto.com/photos/young-beautiful-smiling-woman-chef-with-arms-crossed-at-kitchen-picture-id1298088270?b=1&k=20&m=1298088270&s=170667a&w=0&h=uHmRibes_rtOLmzFECXfGxSgo_OzLbX2rl9PWNaU5AE=" alt="pastelera" className='crop imgChefOne'  />
          </div>
          <div className='container-img-chef chef-move' onMouseEnter={onEnterChef} onMouseLeave={onLeaveChef}>
          <img src="https://media.istockphoto.com/photos/woman-decorating-the-pink-cake-she-has-prepared-picture-id1343850183?b=1&k=20&m=1343850183&s=170667a&w=0&h=x73Rp7WXxL6hcT7Gb6iKGm67t2xB-TpCzIPCm84lc-M=" alt="pastelera" className='crop imgChefTwo' />
          </div>
         
        </div>

      </div>
    </div>
  )
}

export default About