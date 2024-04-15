import React from 'react'
import '../Style/ProductCard.css'
import AddIcon from '@mui/icons-material/Add';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { cartActions } from '../../redux/cartSlice/cartSlice';
import { toast } from 'react-toastify';

const ProductCard = ({item}) => {

    const dispatch = useDispatch()
    const addToCard = () =>{
        dispatch(cartActions.addItem({
            id: item.id,
            productName: item.productName,
            price: item.price,
            imgUrl: item.imgUrl,
        }))
        toast.success('Product added succesfully')
    }

  return (
    <div className='col'>
        <div className="product__item">
            <Link to={`/shop/${item.id}`}>
                <div className="product__img">
                    <motion.img whileHover={{scale:0.9}} src={item.imgUrl} alt="" />
                </div>
                <div className="Product__Info">
                    <h3 className="product__name">{item.productName}</h3>
                    <span className="text-center d-block">{item.category}</span>
                </div>
            </Link>
                <div className="product__card-bottom">
                    <span className="price">{`$`+item.price}</span>
                    <motion.span whileTap={{scale:1.2}} onClick={addToCard}>
                    < AddIcon className='icon__add'/>
                    </motion.span>
                </div>
        </div>
    </div>
  )
}

export default ProductCard