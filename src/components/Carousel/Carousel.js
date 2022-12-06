import React from 'react';
import './carousel.css';
import { useEffect, useState } from 'react';
import {products} from '../../products.js'


function Carousel() {


    const [currentSlide, setCurrentSlide] = useState(0);
    const [touchPosition, setTouchPosition] = useState(null)
  
const fotos = [
  {
    url:"https://cdn.pixabay.com/photo/2018/02/18/19/07/cake-3163117__340.jpg", 
    nombre:"Selva negra"
  },
  {
    url:"https://cdn.pixabay.com/photo/2019/07/28/05/19/sweets-4367949__340.jpg", 
    nombre:"Cookies"
  },
  {
    url:"https://cdn.pixabay.com/photo/2017/03/15/19/18/tartlet-2147173__480.jpg", 
    nombre:"Lemon Pie"
  },
  {
    url:"https://cdn.pixabay.com/photo/2022/01/06/12/00/brownies-6919343__340.jpg", 
    nombre:"Brownies"
  },
  {
    url:"", 
    nombre:""
  },
]

    const slideLength= fotos.length
  
    //---------Carousel------------------------------------
  
    const autoScroll= true;
    let slideInterval;
    let intervalTime= 5000;
  
    const nextSlide = () => {
      setCurrentSlide(currentSlide === slideLength - 1 ? 0 : currentSlide + 1)
    }
  
    const prevSlide = () => {
      setCurrentSlide(currentSlide === 0 ? slideLength - 1 : currentSlide - 1)
      console.log("p")
    }
  
    function auto() {
      slideInterval = setInterval(nextSlide, intervalTime)
    }
  
  
    useEffect(() => {
      setCurrentSlide(0)
    }, [])
  
    useEffect(() => {
      if (autoScroll) {
        auto()
  
      }
      return () => clear()
    }, [currentSlide])
  
    function clear() {
      clearInterval(slideInterval)
  
    }
  
    //Moving on touch--------------------------------------------------------
  
  
    const handleTouchStart = (e) => {
      const touchDown = e.touches[0].clientX
      console.log(touchDown)
      setTouchPosition(touchDown)
    }
  
    const handleTouchMove = (e) => {
      const touchDown = touchPosition
  
      if (touchDown === null) {
        return
      }
  
      const currentTouch = e.touches[0].clientX
      const diff = touchDown - currentTouch
  
      if (diff > 5) {
        nextSlide()
      }
      if (diff < -5) {
        prevSlide()
      }
      setTouchPosition(null)
    }
    return (
      <>
        <div className='carousel-container'>
          <div className="arrowPrev" onClick={prevSlide} >{"<"}</div>
          <div className="arrowNext" onClick={nextSlide} >{">"}</div>
          {products.map((el, index) => {
            return (
              <div className={index === currentSlide ? "slideCurrent" : "slide"} key={index} onTouchStart={handleTouchStart} onTouchMove={handleTouchMove}>
                {index === currentSlide && (
                  <img src={el.image} width="100%" alt={el.title} className="carouselImg" />
                )
                }
              </div>
            )
          })}
        </div>
      </>
    )
  
  


}

export default Carousel