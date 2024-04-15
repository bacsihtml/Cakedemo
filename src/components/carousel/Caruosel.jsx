import React, { useState } from 'react'
import Carouselitem from '../carouselitem/carouselitem'
import "./Caruosel.css"

const Caruosel = () => {
  const [activeIndex,setactiveIndex] = useState(0)
  const items = [
    {
        id:1,
        des:"bla bla",
        img: require("../../asset/banner.jpeg")
    },
    {
        id:2,
        des:"bla bla",
        img: require("../../asset/banner02.jpg")
    },
    {
        id:3,
        des:"bla bla",
        img: require("../../asset/banner03.jpg")
    },
  ]

  const updateIndex = (newIndex) => {
    if(newIndex < 0) {
      newIndex = 0
    }else if (newIndex >= items.length){
      newIndex = items.length -1
    }
    setactiveIndex(newIndex)
  }

  return (
    <div className='carousel'>
        <div className="inner" style={{transform: `translate(-${activeIndex * 100}vw)`}}>
        {items.map((item) => (
          <React.Fragment>
            <Carouselitem key={item.id} item={item} />
          </React.Fragment>
        ))}
        </div>

        <div className="carousel-buttons">
          <button onClick={() => {
            updateIndex(activeIndex - 1)
          }} className='button-arrow'>
            <span className="arrow-left material-symbols-outlined">arrow_back_ios</span>
          </button>
          <div className="indicators">
            {items.map((item,index) => {
              return (
                <button onClick={() => {
                  updateIndex(index)
                }} className='indicator-buttons'>
                  <span className={`material-symbols-outlined ${
                    index===activeIndex
                      ? "indicator-symbol-active"
                      : "indicator-symbol"}`}
                  >
                    radio_button_checked
                  </span>
                </button>
              )
            })}
            
          </div>
          <button onClick={() => {
            updateIndex(activeIndex + 1)
          }} className='button-arrow'>
            <span className="arrow-right material-symbols-outlined">arrow_forward_ios</span>
          </button>
        </div>
    </div>
  )
}

export default Caruosel