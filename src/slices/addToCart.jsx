import { createSlice } from '@reduxjs/toolkit'

export const addToCart = createSlice({
  name: 'cart',
  initialState: {
    value: [],
  },
  reducers: {
    addtocard: (state, action) => {
      let existingItem = state.value.find(item => item.title === action.payload.title)
      existingItem
        ? existingItem.quantity += 1
        : state.value.push({ ...action.payload, quantity: 1, price: Number(action.payload.price) })
        
    },
    increment: (state, action) => {
      state.value.forEach(item => {
        if (item.title === action.payload.title) item.quantity += 1
      })
    },
    decrement: (state, action) => {
      state.value.forEach(item => {
        if (item.title === action.payload.title && item.quantity > 1) item.quantity -= 1
      })
    },
    remove: (state, action) => {
      state.value = state.value.filter(item => item.title !== action.payload.title)
    },
  },
})

export const { addtocard, increment, decrement, remove } = addToCart.actions
export default addToCart.reducer
