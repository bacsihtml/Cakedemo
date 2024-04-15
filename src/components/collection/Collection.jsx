import React from 'react'
import "./Collection.css"
import CollectionItems from '../collectionItems/collectionItems'

const collection = [
  {
    id:1,
    img: require("../../asset/01trong3-removebg-preview.jpg"),
    title: "Cupcakes",
    dec: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. A sint alias reiciendis. Odio quam qui unde"
  },
  {
    id:2,
    img: require("../../asset/02trong3-removebg-preview.jpg"),
    title: "Mocaroons",
    dec: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. A sint alias reiciendis. Odio quam qui unde"
  },
  {
    id:3,
    img: require("../../asset/03trong3-removebg-preview.jpg"),
    title: "Cakes",
    dec: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. A sint alias reiciendis. Odio quam qui unde"
  },
]
const Collection = () => {
  return (
    <div className='collection container'>
      <div className="collection-texts">
        <div className='text-pcl collection-title'>See collection</div>
        <h1>our fine home made chocolate</h1>
        <p className='text-p'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate aut ipsa nam laborum voluptas 
          asperiores. Ducimus ab.
        </p>
        <button className='btn'>READ MORE</button>
      </div>
      
      <div className="list">
        {collection.map((item) =>{
          return <CollectionItems key={item.id} item={item}/>
        })}
      </div>
    </div>
  )
}

export default Collection