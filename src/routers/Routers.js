import { Routes, Route, Navigate } from 'react-router-dom';

import Cart from '../page/Cart/Cart'
import ProductDetails from '../page/ProductDetails/ProductDetails';
import Shop from '../page/Shop/Shop'
import Login from '../page/Login/Login'
import Signup from '../page/Signup/Signup'
import Home from '../page/Home/Home'
import Checkout from '../page/Checkout/Checkout'
import React from 'react'


const Routers = () => {
  return <Routes>
    <Route path="/" element={<Navigate to="/home" />} />
    <Route path='/home' element={<Home/>}/>
    <Route path='/shop' element={<Shop/>}/>
    <Route path='/shop/:id' element={<ProductDetails/>}/>
    <Route path='/cart' element={<Cart/>}/>
    <Route path='/checkout' element={<Checkout/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/signup' element={<Signup/>}/>
  </Routes>
}

export default Routers;