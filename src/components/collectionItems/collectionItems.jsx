import React from 'react'
import "./collectionItems.css"

const collectionItems = ({item}) => {
  return (
    <div className='collectionItems'>
        <img className='collectionItem-img' src={item.img} alt='img' />
        <div className='collectionItem-title'>{item.title}</div>
        <div className="collectionItem-text">{item.dec}</div>
        <div className='more-btn'>Learn More</div>
    </div>
  )
}

export default collectionItems