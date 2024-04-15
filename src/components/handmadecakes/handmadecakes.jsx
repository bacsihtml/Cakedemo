import React from 'react'
import "./handmadecakes.css"
import banhkem from "../../asset/banhkem.png"


const box = [
    {
        id: 1,
        number: 345,
        text: "Even if your less into design and more into content",
        btn: "READ MORE"
    },
    {
        id: 2,
        number: 120 + "+",
        text: "You made all the required mock for commissioned",
        btn: "READ MORE"
    },
    {
        id: 3,
        number: 65 + "+",
        text: "Stategy you may find some redeeming value with",
        btn: "READ MORE"
    },
    {
        id: 4,
        number: 850,
        text: "Layout got all the approvals built a tested code base",
        btn: "READ MORE"
    },
]

const handmadecakes = () => {
  return (
    <div className='handmadecakes container'>
        <img src={banhkem} alt="" />
        <div className="text">
            <div className="text-pcl">want to see more</div>
            <h1 className='handmadecakes-h1'>Handmade Cakes For your Evary Taste</h1>
            <p>Anyway, your still use Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia aliquid 
                et sapiente? Sint doloribus sit amet consectetur dolor sit amet consectetur adipisicing elit adipisicing elit. Mollitia aliqui ratione cupiditate vel dolor rem quas.
            </p>
            <div className="box-introduce">
                {box.map((item) => {
                    return (
                        <div className='boxs' key={item.id}>
                            <div className="numbers">{item.number}</div>
                            <div className="texts">{item.text}</div>
                            <div className="more-btn">{item.btn}</div>
                        </div> 
                    )
                })}
            </div>
        </div>
    </div>
  )
}

export default handmadecakes