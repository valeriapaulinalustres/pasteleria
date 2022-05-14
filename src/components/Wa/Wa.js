import React, { useContext } from 'react';
import WaContext from '../../context/WaContext';
import { BsWhatsapp } from 'react-icons/bs';


function Wa() {



    const { onEnter, onLeave } = useContext(WaContext);
    



  return (
    <a href="https://wa.me/5491160127926/?text=Hola%20Mi%20Pastelería" target="_blank"><button className='about-button button'  onMouseEnter={onEnter} onMouseLeave={onLeave} ><BsWhatsapp /></button></a>
  )
}

export default Wa