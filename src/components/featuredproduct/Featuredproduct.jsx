import React from 'react'
import "./Featuredproduct.css"

const cards = [
  {
    id:1,
    title: "White Cake",
    text: "Sweets Bakery",
    active: -40+"%",
    img: require("../../asset/imgshop/donut1.jpg"),
    price: "$"+199,
    pricen: "$"+119,
  },
  {
    id:2,
    title: "White Cake",
    text: "Sweets Bakery",
    img: require("../../asset/imgshop/sau.jpg"),
    pricen: "$"+199,
  },
  {
    id:3,
    title: "White Cake",
    text: "Sweets Bakery",
    img: require("../../asset/imgshop/nam.jpg"),
    pricen: "$"+199,
  },
  {
    id:4,
    title: "White Cake",
    text: "Sweets Bakery",
    img: require("../../asset/imgshop/Waffle1.jpg"),
    pricen: "$"+199,
  },
  {
    id:5,
    title: "White Cake",
    text: "Sweets Bakery",
    img: require("../../asset/imgshop/cake1.jpg"),
    pricen: "$"+199,
  },
  {
    id:6,
    title: "White Cake",
    text: "Sweets Bakery",
    img: require("../../asset/imgshop/Croissants1.jpg"),
    pricen: "$"+199,
  },
  
]

const Featuredproduct = () => {
  return (
    <div className='featuredproduct container'>
      <div className="featuredproduct-texts">
        <div className="featurepdroduct-wrapper">
          <div className="text-pcl">Sweet Accessories</div>
          <h1>Featuredproduct</h1>
          <p className='featuredproduct-text'>To short sentences, to many heading, image too large for the</p>
          <p className='featuredproduct-text'>or they fit in the but it looks</p>
        </div>

        <div className="cards">
          {cards.map((card)=>{
            return (
              <React.Fragment>
                <div className="card" key={card.id}>
                  <div className='card-box1'>
                    <div className="card-title">{card.title}</div>
                    <div className="card-text">{card.text}</div>
                  </div>
                  {/* <div className="active">{card.active}</div> */}
                  <div style={{width: "380px", backgroundColor: "white"}}><img className='card-img' src={card.img} alt="" /></div>
                    <div className="card-box2">
                      <div className="card-price">{card.price}</div>
                      <div className="card-pricen">{card.pricen}</div>
                    </div>
                </div>
              </React.Fragment>
            )
          })}
        </div>
      </div>


    </div>
  )
}

export default Featuredproduct