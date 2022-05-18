import React, { useEffect, useRef  } from 'react';
import { useIntersection } from "react-use";
import './about.css';
import { gsap } from 'gsap';
import Wa from '../Wa/Wa';




function About() { 


//scroll
// Ref for our element
const sectionRefAbout = useRef(null);
// All the ref to be observed
const intersection = useIntersection(sectionRefAbout, {
  root: null,
  rootMargin: "0px",
  threshold: 0.5
});

// Animation for fading in
const fadeIn = element => {
  gsap.to(element, 1, {
    opacity: 1,
    y: -80,
    ease: "power4.out",
    duration:3,
    stagger: {
      amount: 0.6
    }
  });
};
// Animation for fading out
const fadeOut = element => {
  gsap.to(element, 1, {
    opacity: 0,
    y: -20,
    ease: "power4.out",
    
  });
};

// checking to see when the vieport is visible to the user
intersection && intersection.intersectionRatio < 0.5
  ? fadeOut(".fadeIn")
  : fadeIn(".fadeIn");





//specific animation
  const el = useRef();
  const elText = useRef();
  const elTitle = useRef();
  const q = gsap.utils.selector(el);
  const qText = gsap.utils.selector(elText);
 
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
    gsap.to(elTitle.current, { y:80, duration:3 });
   
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
        x: 26,

      },"-=1")

      .to(qText(".about-text"), {
        duration: 4,
        y:50,
        stagger: 0.3,
        opacity: 1,
        

      }, "-=2.5")

      .to(qText(".about-button"), {
        duration: 3,
        x:550,
        y: 60,
        scale:2,
        opacity: 1,
       
        

      }, "-=3.5")

      .to(q(".imgFour"), {
        duration: 1,
        y: 218,

      }, "-=1")

     
      .to(q(".imgFive"), {
        duration: 1,
        y: -218,

      })

      .to(q(".imgSix"), {
        duration: 2,
        x: -290,

      })

      .to(q(".imgSeven"), {
        duration: 1,
        x: 80,

      }, "-=2")




     
  }, []);




  return (
    <div className='about-container'>
      <div className='subtitle-background'>
        <h2 ref={elTitle}>Nosotras</h2>

      </div>

      <section className='about-pastry'>
        <div className='about-cakes' ref={el} >
          <img src="https://cdn.pixabay.com/photo/2022/05/03/20/01/black-forest-cake-7172587__340.jpg" alt="torta selva negra" width="100%" className='about-image imgOne imgFour' />
          <img src="https://media.istockphoto.com/photos/tartlet-with-lemon-cream-and-meringue-picture-id874445758?b=1&k=20&m=874445758&s=170667a&w=0&h=CQAZIrdbQB9VC3rVFbzOGzkLhOzuwCstf_vBmqe1_vI=" alt="lemon pie" width="100%" className='about-image imgTwo imgSeven' />
          <img src="https://cdn.pixabay.com/photo/2022/04/07/20/34/sponge-cake-7118242__340.jpg" alt="torta de bodas" width="100%" className='about-image imgOne imgSix' />
          <img src="https://media.istockphoto.com/photos/traditional-argentinian-alfajores-picture-id1180243264?b=1&k=20&m=1180243264&s=170667a&w=0&h=fwBUASfR3OI9xjjHcZqoPBXMtjkxlhKj0jG-TMfeOfM=" alt="alfajores" width="100%" className='about-image imgTwo imgFive' />
        </div>

        <div ref={elText} className="about-pastry-text">
          <h4 className='about-text'>Sobre nosotras</h4>
          <h3 className='about-text'>Bienvenidos a Mi Pastelería</h3>
          <p className='about-text paragraph'>Somos un equipo de pasteleras apasionadas por nuestra profesión. Con más de 10 años de experiencia en el rubro, nos dedicamos a servir a empresas, eventos y clientes particulares. Elaboramos en forma casera los productos más famosos de la pastelería. </p>
          <div>

          </div>
         
          <Wa />        
        </div>

      </section>

      <section className='about-team ' ref={sectionRefAbout}>
        <h4 className='text-center fadeIn'>El equipo</h4>
        <h3 className='text-center fadeIn'>Nuestras pasteleras</h3>
        <div className='about-team-img'>
          <div className='container-img-chef fadeIn' onMouseEnter={onEnterChef} onMouseLeave={onLeaveChef} >
          <img src="https://media.istockphoto.com/photos/young-beautiful-smiling-woman-chef-with-arms-crossed-at-kitchen-picture-id1298088270?b=1&k=20&m=1298088270&s=170667a&w=0&h=uHmRibes_rtOLmzFECXfGxSgo_OzLbX2rl9PWNaU5AE=" alt="pastelera" className='crop'  />
          </div>
          <div className='container-img-chef fadeIn' onMouseEnter={onEnterChef} onMouseLeave={onLeaveChef}>
          <img src="https://media.istockphoto.com/photos/woman-decorating-the-pink-cake-she-has-prepared-picture-id1343850183?b=1&k=20&m=1343850183&s=170667a&w=0&h=x73Rp7WXxL6hcT7Gb6iKGm67t2xB-TpCzIPCm84lc-M=" alt="pastelera" className='crop' />
          </div>
         
        </div>

      </section>
    </div>
  )
}

export default About