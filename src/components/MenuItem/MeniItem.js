import React from 'react';
import './menuItem.css'

function MeniItem({title, price, image, id }) {
  return (
    <div className='menuItem-container'>
        <div className='menu-img'>
            <img src={image} alt={title} width="100%" className='crop'></img>
        </div>
        <p className='item-name'>{title}</p>
        <p className='price'>$ {price}</p>
    </div>
  )
}

export default MeniItem