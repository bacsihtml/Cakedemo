import React from 'react'
import '../Style/ProductsLists.css'
import ProductCard from './ProductCard'

import imgTitle1 from '../../asset/imgshop/imgtitle_Cakes.jpg'
import imgTitle2 from '../../asset/imgshop/imgtitle_Donuts.jpg'
import imgTitle3 from '../../asset/imgshop/imgtitle_Croissants.jpg'
import imgTitle4 from '../../asset/imgshop/imgtitle_Waffles.jpg'
import imgTitle5 from '../../asset/imgshop/imgtitle_brownie.jpg'

const dataTitles = [
    {
        id:1,
        img: imgTitle1,
        title: "cake",
        des: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis, non?"
    },

    {
        id:2,
        img: imgTitle2,
        title: "dunut",
        des: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis, non?"
    },

    {
        id:3,
        img: imgTitle3,
        title: "croissants",
        des: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis, non?"
    },

    {
      id:4,
      img: imgTitle4,
      title: "waffles",
      des: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis, non?"
    },

    {
      id:4,
      img: imgTitle5,
      title: "brownie",
      des: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis, non?"
    },
]



const ProductsLists = ({data}) => {

  const getProductsByTitle = (title) => {
    return data.filter((item) => item.category === title);
  };

  return (
    <>
        {
          dataTitles.map((card) => {
            const productsByTitle = getProductsByTitle(card.title);
            return (
              <div className="product__cards" key={card.id}>
                <div className="product__cards-img-title">
                    <img className='product__cards-img' src={card.img} alt="" />
                    <div className="product__card-information">
                      <div className="product__cards-text-title">{card.title}</div>
                      <div className="product__cards-text-des">{card.des}</div>
                    </div>
                </div>
                <div className="product__card-items">

                    {
                      productsByTitle.map(item => (
                        <div className="product-card" key={item.id}>
                          <ProductCard item={item}/>
                        </div>
                      ))
                    }
                </div>
              </div>
            )
          })
        }
    </>
  )
}

export default ProductsLists