import React, { useState } from 'react'
import './Checkout.css'
import EastIcon from '@mui/icons-material/East';
import AddIcon from '@mui/icons-material/Add';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { motion } from 'framer-motion';
import { Scale } from '@mui/icons-material';

const Checkout = () => {

  const navigate = useNavigate();
  const cartItems = useSelector((state) => state.cart.cartItems);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    streetAddress: '',
    city: '',
    country: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handlePlaceOrder = () => {
    // Kiểm tra xem tất cả các trường đã được điền thông tin hay không
    if (!Object.values(formData).every((value) => value !== '')) {
      // Nếu có trường nào đó không được điền thông tin, hiển thị thông báo lỗi
      toast.error('Please fill in all fields');
    } else if (cartItems.length === 0) {
      // Nếu giỏ hàng trống, chuyển hướng đến trang Shop
      toast.success('There are no products in the cart');
      navigate('/shop');
    } else {
      // Xử lý logic đặt hàng khi tất cả các trường đã được điền thông tin và giỏ hàng không trống
      // (thêm code xử lý đặt hàng ở đây)
      toast.success('Order Success');
    }
  };

  return (
    <div>
      <div className="cart__path">
        <h2>SHOPPING CART</h2>
        <EastIcon style={{color: 'white', fontSize: '34'}}/>
        <h2>CHECKOUT</h2>
        <EastIcon style={{color: 'white', fontSize: '34'}}/>
        <h2>ORDER COMPLETE</h2>
      </div>

      <div className="container checkout">
        <div className='checkout__form mr-4'>
          <h6 className='fw mb-4'>Billing Information</h6>
          <form>
            <div className='form-group mb'>
              <input type="text" name="name" placeholder='Enter your name' value={formData.name} onChange={handleInputChange} required/>
            </div>
  
            <div className='form-group mb'>
              <input type="email" name="email" placeholder='Enter your email' value={formData.email} onChange={handleInputChange} required/>
            </div>
  
            <div className='form-group mb'>
              <input type="number" name="phoneNumber" placeholder='Phone number' value={formData.phoneNumber} onChange={handleInputChange} required/>
            </div>
  
            <div className='form-group mb'>
              <input type="text" name="streetAddress" placeholder='Street address' value={formData.streetAddress} onChange={handleInputChange} required/>
            </div>
  
            <div className='form-group mb'>
            <input type="text" name="city" placeholder='City' value={formData.city} onChange={handleInputChange} required/>
            </div>
  
            <div className='form-group mb'>
            <input type="text" name="country" placeholder='Country' value={formData.country} onChange={handleInputChange} required/>
            </div>
          </form>
        </div>

        <div className='payment-methods'>
          <div>
            <h6 className='fw mb-4'>Choose your payment option</h6>
            <div className='mb'>
              <button className='btn__onl paypal'></button>
              <button className='btn__onl amazonpay'></button>
            </div>
          </div>
          <div>
            <p className='mb fw'>Pay with card</p>
            <button className='card-pay btn__onl mb'><AddIcon/> Credit/debit card</button>
            <p className='mb fw'>Direct payment</p>
            <button className='direct-payment btn__onl mb'>Payment on delivery</button>
          </div>
          <motion.button whileTap={{scale: .9}} className='btn__onl btn__order' onClick={handlePlaceOrder}>Place Order</motion.button>
        </div>
      </div>
    </div>
  )
}

export default Checkout