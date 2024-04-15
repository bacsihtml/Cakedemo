import React from 'react'
import '../Style/ProductYouMight.css'
import ProductCard from './ProductCard'

const ProductYouMight = ({currentProductId ,data}) => {

    const filteredProducts = data.filter(item => item.id !== currentProductId)

  return (
    <div className='productYouMight'>
        <div className="wrapper">
            {
                filteredProducts.map((item) => (
                    <ProductCard item={item} key={item.id}/>
                ))
            }
        </div>
    </div>
  )
}

export default ProductYouMight