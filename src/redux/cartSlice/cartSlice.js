

import { createSlice } from '@reduxjs/toolkit'

const initialState = {

    cartItems: [],
    totalAmount: 0,
    totalQuantity:0
}

// const cartSlice = createSlice({
//   name: 'cart',
//   initialState,
//     reducers: {
//         addItem: (state, action) => {
//             const newItem = action.payload
//             const existingItem = state.cartItems.find(item => item.id === newItem.id)

//             state.totalQuantity++

//             if (!existingItem) {
//                 state.cartItems.push({
//                     id: newItem.id,
//                     productName: newItem.productName,
//                     imgUrl: newItem.imgUrl,
//                     price: newItem.price,
//                     quantity: 1,
//                     totallPrice:newItem.price
//                 })
//             }
//             else {
//                 existingItem.quantity++
//                 existingItem.totallPrice = Number(existingItem.totallPrice) + Number(newItem.price)
//             }

//             state.totalAmount = state.cartItems.reduce((total, item) => total + Number(item.price) * Number(item.quantity),0) //tính tổng tiền
            
//         },

//         deleteItem:(state, action) => {
//             const id = action.payload
//             const existingItem = state.cartItems.find(item => item.id === id)
    
//             if (existingItem) {
//                 state.cartItems = state.cartItems.filter(item => item.id !== id);
//                 state.totalQuantity = state.totalQuantity - existingItem.quantity
//             }
//             state.totalAmount = state.cartItems.reduce((total, item) => total + Number(item.price) * Number(item.quantity),0) //tính tổng tiền
    
//         }
//     },

    
// });

// export const cartActions = cartSlice.actions

// export default cartSlice.reducer

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
      addItem: (state, action) => {
        const newItem = action.payload;
        const existingItem = state.cartItems.find(item => item.id === newItem.id);
  
        state.totalQuantity++;
  
        if (!existingItem) {
          state.cartItems.push({
            id: newItem.id,
            productName: newItem.productName,
            imgUrl: newItem.imgUrl,
            price: newItem.price,
            quantity: 1,
            totalPrice: newItem.price
          });
        } else {
          existingItem.quantity++;
          existingItem.totalPrice = Number(existingItem.totalPrice) + Number(newItem.price);
        }
  
        // Tính tổng tiền và tổng số lượng sản phẩm cùng loại
        calculateTotalAmount(state);
      },
  
      deleteItem: (state, action) => {
        const id = action.payload;
        const existingItem = state.cartItems.find(item => item.id === id);
  
        if (existingItem) {
          state.cartItems = state.cartItems.filter(item => item.id !== id);
          state.totalQuantity = state.totalQuantity - existingItem.quantity;
        }
        
        // Tính tổng tiền và tổng số lượng sản phẩm cùng loại
        calculateTotalAmount(state);
      }
    }
  });
  
  // Hàm tính tổng tiền và tổng số lượng sản phẩm cùng loại
  const calculateTotalAmount = (state) => {
    state.totalAmount = state.cartItems.reduce((total, item) => total + Number(item.price) * Number(item.quantity), 0); // Tính tổng tiền
    
    // Tính tổng số lượng sản phẩm cùng loại
    state.totalQuantity = state.cartItems.reduce((total, item) => total + item.quantity, 0);
  };
  
  export const cartActions = cartSlice.actions;
  
  export default cartSlice.reducer;
  