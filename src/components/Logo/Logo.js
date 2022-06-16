import React, { useEffect, useRef} from 'react';
import { gsap } from 'gsap';
import './logo.css'

function Logo() {
    const logoRef = useRef();
    useEffect(() => {
        gsap.to(logoRef.current, { rotate: 360, duration: 3, repeat: 300});
    }, [])
    
  return (
    <div className='logo-pasteleria' ref={logoRef}></div>
  )
}

export default Logo