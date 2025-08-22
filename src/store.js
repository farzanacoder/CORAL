import { configureStore } from '@reduxjs/toolkit'
import  counterSlice  from './slices/counterSlice.jsx'
import  breadCrumb  from './slices/breadCrumb.jsx'
import addtocard from './slices/addToCart.jsx'

export default configureStore({
  reducer: {
    bread: breadCrumb,
    count: counterSlice,
    cart: addtocard
  },
})