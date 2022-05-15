import React, { createContext, useState } from 'react';
import { gsap } from 'gsap';


const WaContext = createContext();

const WaProvider = ({ children }) => {

  //whatsapp button
  const onEnter = ({ currentTarget }) => {
    gsap.to(currentTarget, { backgroundColor: "#00bc0a", scale: 2.5 });
  };
  
  const onLeave = ({ currentTarget }) => {
    gsap.to(currentTarget, { backgroundColor: "#DA0037", scale: 2 });
  };


  const data = { onEnter, onLeave }

  return (
    <WaContext.Provider value={data}>
      {children}
    </WaContext.Provider>
  )
}

export { WaProvider };
//exporto contexto
export default WaContext;


