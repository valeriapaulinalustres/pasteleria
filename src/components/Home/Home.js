import React, { useRef, useEffect } from "react";
import './home.css';
import { TimelineLite, Power2 } from "gsap";
import CSSRulePlugin from "gsap/CSSRulePlugin";


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




  return (
    <section className='main'>
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


    </section>
  )
}

export default Home