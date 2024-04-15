import React from 'react';
import './Cart.css';
import EastIcon from '@mui/icons-material/East';
import ClearIcon from '@mui/icons-material/Clear';
import { motion } from 'framer-motion';
import { cartActions } from '../../redux/cartSlice/cartSlice';
import { useSelector, useDispatch } from 'react-redux'; // Thêm import này
import { Link } from 'react-router-dom';

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const totalAmount = useSelector((state) => state.cart.totalAmount);

  return (
    <>
      <div className="cart__path">
        <h2>SHOPPING CART</h2>
        <EastIcon style={{ color: 'white', fontSize: '34' }} />
        <h2>CHECKOUT</h2>
        <EastIcon style={{ color: 'white', fontSize: '34' }} />
        <h2>ORDER COMPLETE</h2>
      </div>

      <div className='tables'>
        <div className='table '>
          {
            cartItems.length === 0 ? (<h2 style={{ fontSize: '24px', marginTop: '50px' }} className='text-center'>No item added to the cart</h2>) :
              (<table >
                <thead>
                  <tr>
                    <th></th>
                    <th></th>
                    <th>product</th>
                    <th>price</th>
                    <th>quantity</th>
                    <th>subtotal</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    cartItems.map((item, index) => (
                      <Tr item={item} key={index} cartItems={cartItems} /> // Truyền cartItems vào component Tr
                    ))
                  }
                </tbody>
              </table>)
          }

        </div>

        <div className="table__tow">
          <div className="table__info">
            <h2>CART TOTALS</h2>
            <div className="table__subtotal">
              <h6>Subtotal</h6>
              <span>${totalAmount}</span>
            </div>

            <div className='gachngang'></div>

            <div className="table__shipping">
              <h6>Shipping</h6>
              <div>
                <div>
                  <span>Fleat rate: <span className='shipping-number'>$20.00</span></span>
                  <input type="radio" />
                </div>
                <div>
                  <span>Free shipping</span>
                  <input type="radio" name="" id="" />
                </div>
                <div>
                  <span>Local pickup: <span className='shipping-number'>$25.00</span></span>
                  <input type="radio" name="" id="" />
                </div>
                <span style={{ display: 'block' }}>Shipping to Al</span>
                <span style={{ display: 'block', color: '#fb4580', fontWeight: '700' }}>Change Address</span>
              </div>
            </div>

            <div className="gachngang"></div>

            <div className="table__total">
              <h6>Total</h6>
              <span>${totalAmount}</span>
            </div>

            <Link to='/login'><motion.button whileTap={{ scale: .9 }} className='btn br-5 table__total-button'>PROCEE TO CHECKOUT</motion.button></Link>
          </div>
        </div>
      </div>
      <div className="coupon__code">
        <div className='coupon__input'>
          <input type="text" name="" id="" placeholder='Coupin code ...' />
        </div>
        <motion.button whileTap={{ scale: .9 }} className='btn br-5 coupon__button'>APPLY COUPON</motion.button>
      </div>
    </>
  )
}

const Tr = ({ item, cartItems }) => { // Thêm cartItems vào props
  const dispatch = useDispatch();
  const deleteProduct = () => {
    dispatch(cartActions.deleteItem(item.id));
  };

  // Tính tổng giá tiền của các sản phẩm cùng loại
  const calculateTotalPrice = () => {
    const totalPrice = cartItems.reduce((total, cartItem) => {
      if (cartItem.productName === item.productName) {
        return total + Number(cartItem.price) * Number(cartItem.quantity);
      }
      return total;
    }, 0);
    return totalPrice.toFixed(2);
  };

  return (
    <tr>
      <td><ClearIcon onClick={deleteProduct} /></td>
      <td><img src={item.imgUrl} alt="" style={{ width: '80px' }} /></td>
      <td className='table__nameproduct'>{item.productName}</td>
      <td>${item.price}</td>
      <td>{item.quantity}</td>
      <td style={{ color: '#fb4580', fontWeight: '700' }}>${calculateTotalPrice()}</td>
    </tr>
  );
}

export default Cart