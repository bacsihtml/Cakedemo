import React from 'react'
import "./carouselitem.css"

const carouselitem = ({item}) => {
  return (
    <div className='carousel-item'>
        <img className='carousel-img' src={item.img} alt='img'/>
        {/* <div className='carousel-item-text'>{item.des}</div> */}
    </div>
  )
}

export default carouselitem