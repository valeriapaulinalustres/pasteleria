import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import About from './components/About/About';
import Menu from './components/Menu/Menu';
import Contact from './components/Contact/Contact';
import Home from './components/Home/Home';
import Error from './components/Error/Error';
import {AnimatePresence} from 'framer-motion'

function AnimationRoutes() {
    const location = useLocation();
  return (
      <AnimatePresence>
<Routes location={location} key={location.pathname}>
    <Route path='/' element={<Home />} />
    <Route path='/about' element={<About />} />
    <Route path='/menu' element={<Menu />} />
    <Route path='/contact' element={<Contact />} />
    <Route path='*' element={<Error />} />
  </Routes>
      </AnimatePresence>
    
  )
}

export default AnimationRoutes