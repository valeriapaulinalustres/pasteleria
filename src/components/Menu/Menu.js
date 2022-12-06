import React, { useEffect, useRef } from 'react';
import './menu.css';
import MenuItem from '../MenuItem/MeniItem';
import { gsap } from 'gsap';
import Logo from '../Logo/Logo';
import {products} from '../../products.js'

function Menu() {

 
  const menuRef = useRef();
  const imgContainerRef = useRef();
  const tl = useRef();

  const imgContainer = gsap.utils.selector(imgContainerRef);

  useEffect(() => {

    gsap.to(menuRef.current, { y: 80, duration: 3 });

    tl.current = gsap.timeline()
      .to(imgContainer(".menuItem-container"), {
        duration: 1,
        opacity: 1,
        scale: 1,
        delay: 0.2,
        stagger: 0.5,
        translateY: 20,
      })
  }, [])

  return (
    <div className='top'>
      <div className='subtitle-background'>
        <h2 ref={menuRef}>Nuestras delicias</h2>
   
      </div>
      <div className='menu-container' ref={imgContainerRef}>
        {products.map((item, index) => (
          <MenuItem key={index} title={item.title} price={item.price} image={item.image} id={item.id} />
        ))}
      </div>
    </div>
  )
}

export default Menu