import React, { useState, useRef, useEffect } from 'react'
import './ProductDetails.css'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShuffleIcon from '@mui/icons-material/Shuffle';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import PinterestIcon from '@mui/icons-material/Pinterest';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import ZoomOutMapIcon from '@mui/icons-material/ZoomOutMap';
import StarIcon from '@mui/icons-material/Star';
import { useParams } from 'react-router-dom';
import Products from '../../asset/data/Products';
import ProductYouMight from '../../components/UI/ProductYouMight';
import { useDispatch } from 'react-redux';
import { cartActions } from '../../redux/cartSlice/cartSlice';
import { toast } from 'react-toastify';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';


const ProductDetails = () => {

    const {id} = useParams()
    const product = Products.find(item => item.id === id)

    const { imgUrl, productName, price, avgRating, reviews, description, category } = product

    const relatedProducts = Products.filter(item => item.category === category)
    
    const [tab, setTap] = useState('desc')
    const reviewUser = useRef('')
    const reviewMsg = useRef('')
    const dispatch = useDispatch()

    const [rating, setRating] = useState (null)

    const [showPopup, setShowPopup] = useState(false)

    const togglePopup = () => {
        setShowPopup(!showPopup)
    }

    const submitHandler = (e) => {
        e.preventDefault()

        const reviewUserName = reviewUser.current.value
        const reviewUserMsg = reviewMsg.current.value
        const reviewObj = {
            userName: reviewUserName,
            text: reviewUserMsg,
            rating

        }
        console.log(reviewObj)
        toast.success('Review submitted')
    }

    const addToCart =()=> {
        dispatch(cartActions.addItem({
            id,
            imgUrl,
            productName,
            price,
        }))
        toast.success('Product added successfully')
    }

    useEffect(() => {
        window.scrollTo(0,0)
    },[product])

  return (
    <div>
        <div className="container">
            <div className="ProductDetails-wrapper">
                <div className='ProductDetails__card-img'>
                    <img className='ProductDetails-img' style={{paddingRight:'40px'}} src={imgUrl} alt="" />
                    <div className="ProductDetails-icon-img mt-2" onClick={togglePopup}><ZoomOutMapIcon/></div>
                </div>

                {showPopup && (
                    <div className="popup-image active">
                    <span className='popup-span' onClick={togglePopup}>&times;</span>
                    <img className='popup-image-img' src={imgUrl} alt="" />
                    </div>
                )}
                
                <div className="col">
                    <Link to='/shop'>
                        <div className="ProductDetails-arrowback mbx2"><ArrowBackIosIcon/></div>
                    </Link>
                    <h2 className='mbx2' style={{textTransform: 'capitalize', fontSize: '36px'}}>{productName}</h2>
                    <div className="ProductDetails-price text-pcl mbx2 fw" style={{fontFamily: 'unset'}}>{`$` + price}</div>
                    <div className='mb' style={{fontWeight:'500'}}>Category: {category.toUpperCase()}</div>
                    <div className="ProductDetails-text mbx2">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab a facere suscipit exercitationem minus ea sit, odio laborum minima voluptatem fuga quibusdam aperiam placeat adipisci deserunt animi ratione! Ipsum recusandae rerum commodi soluta hic, 
                    tempore repellendus minus maiores velit cupiditate ex itaque quidem doloremque laudantium deleniti? Sapiente enim omnis voluptatem.</div>
                    <div className="ProductDetails-add mbx2">
                        <motion.button className='btn' style={{borderRadius: '6px'}} onClick={addToCart} whileTap={{scale:1.2}}>ADD TO CARD</motion.button>
                    </div>
                    <div className="ProductDetails-icons mb">
                        <div className='ProductDetails-icon fw6'><ShuffleIcon/>Compare</div>
                        <div className='ProductDetails-icon fw6'><FavoriteBorderIcon />Add to wishlist</div>
                    </div>
                    <div className='license mb'></div>
                    <div className="ProductDetails-category mb fw6">Category Sweets Bakery</div>
                    <div className="ProductDetails-share"><p className='fw6 mr'>Share:</p> 
                        <Link to='https://www.facebook.com/'><FacebookIcon className='mr'/></Link>
                        <Link to='https://twitter.com/?lang=vi'><TwitterIcon className='mr'/></Link>
                        <Link to='https://www.pinterest.com/'><PinterestIcon className='mr'/></Link>
                        <Link to='https://www.linkedin.com/'><LinkedInIcon className='mr'/></Link>
                        <Link to='https://www.instagram.com/'><InstagramIcon className='mr'/></Link>
                    </div>
                </div>
            </div>
        </div>
        <div className="license"></div>
        <div className="container">
            <div className="informations">
                <div className="tab__wrapper">
                    <h6 className={`${tab === 'desc' ? 'active__tab' : ''}`} onClick={() => setTap('desc')}>Description</h6>
                    <h6 className={`${tab === 'rev' ? 'active__tab' : ''}`} onClick={() => setTap('rev')}>Review ({reviews.length})</h6>
                </div>
            </div>
            {
                tab==='desc' ? (<div className="tab__content mt-5">
                    <p className='tab__content-p'>{description}</p>
                </div>) : (
                <div className='product__review mt-5'>
                    <div className="review__wrapper">
                        <ul>
                            {
                                reviews?.map((item, index) => (
                                    <li kew={index} className='mb-4'>
                                        <h6>Name name</h6>
                                        <span>{item.rating} (rating)</span>
                                        <p>{item.text}</p>
                                    </li>
                                ))
                            }
                        </ul>

                        <div className="review__form">
                            <h4>Leave your experience</h4>
                            <form action="" onSubmit={submitHandler}>
                                <div className="form__group">
                                    <input type="text" name="" id="" placeholder='Enter Name' ref={reviewUser} required/>
                                </div>

                                <div className="form__group gap-5">
                                    <motion.span whileTap={{scale:1.2}} onClick={() => setRating(1)}>1<StarIcon/></motion.span>
                                    <motion.span whileTap={{scale:1.2}} onClick={() => setRating(2)}>2<StarIcon/></motion.span>
                                    <motion.span whileTap={{scale:1.2}} onClick={() => setRating(3)}>3<StarIcon/></motion.span>
                                    <motion.span whileTap={{scale:1.2}} onClick={() => setRating(4)}>4<StarIcon/></motion.span>
                                    <motion.span whileTap={{scale:1.2}} onClick={() => setRating(5)}>5<StarIcon/></motion.span>
                                </div>

                                <div className="form__group">
                                    <textarea rows={4} type="text" name="" id="" placeholder='Review Message...' ref={reviewMsg} required/>
                                </div>

                                <button type='submit' className="btn br-5">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>)
            }

            <div className="related mt-5">
                <h2 className='related__title'>You might</h2>
                <ProductYouMight data={relatedProducts} currentProductId={id}/>
            </div>

        </div>
    </div>
  )
}

export default ProductDetails