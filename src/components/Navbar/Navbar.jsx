import React, { useState, useRef } from 'react';
import './Navbar.css';
import { NavLink, useNavigate } from 'react-router-dom';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import RedeemIcon from '@mui/icons-material/Redeem';
import { useSelector } from 'react-redux';
import userIcon from '../../asset/imgshop/user-icon.png';
import { motion } from 'framer-motion';
import { signOut } from 'firebase/auth'; // Import signOut
import { auth } from '../../firebase.config';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import useAuth from '../../custom-hook/useAuth';


const nav__links = [
  {
    path: 'home',
    display: 'Home'
  },
  {
    path: 'shop',
    display: 'Shop'
  },
  {
    path: 'cart',
    display: 'Cart'
  },
  {
    path: 'blog',
    display: 'Blog'
  }
];

const Navbar = () => {
  const navigate = useNavigate();
  const totalQuantity = useSelector(state => state.cart.totalQuantity);
  const profileActionRef = useRef(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const { currentUser } = useAuth()

  const navigateToCart = () => {
    navigate('/cart');
  };

  const toggleProfileAcrions = () => profileActionRef.current.classList.toggle('show__profile')


  const logout = () => {
    signOut(auth).then(() =>{
      toast.success('Logged out')
      navigate('/home')
    }).catch(err =>{
      toast.success(err.message)
    })
  }

  return (
    <div className='navigation'>
      <div className="containerh">
        <div className="logo"><RedeemIcon />woodmart.</div>
        <ul className="navigation-menu">
          {nav__links.map((item, index) => (
            <li className="nav_item" key={index}>
              <NavLink to={item.path}>{item.display}</NavLink>
            </li>
          ))}
        </ul>

        <ul className="navigation-icons">
          <li>
            <div className='profile'>
              <motion.img whileTap={{ scale: 1.2 }} src={userIcon} alt="" onClick={toggleProfileAcrions} />

              <div className="profile__actions" ref={profileActionRef}>
                  {
                    currentUser ? (<span onClick={logout}>Logout</span>) : (
                      <div className='profile__login'>
                        <Link to="/signup"><span className='profile__btnsignup'>Signup</span></Link>
                        <Link to="/login"><span className='profile__btnlogin'>Login</span></Link>
                      </div>
                    )
                  }   
              </div>

            </div>
          </li>
          <li>
            <span className='noti-icon'>
              <NotificationsNoneIcon />
              <span className="badge">1</span>
            </span>
          </li>
          <li>
            <span className='fav-icon'>
              <FavoriteBorderIcon />
              <span className="badge">1</span>
            </span>
          </li>
          <li>
            <span className='cart-icon' onClick={navigateToCart}>
              <AddShoppingCartIcon />
              <span className="badge">{totalQuantity}</span>
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
