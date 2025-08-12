import { createSlice } from '@reduxjs/toolkit'

export const breadCrumb = createSlice({
  name: 'count',
  initialState: {
    prevvalue: null,
    currentvalue: null,
  },
  reducers: {
    breadButton: (state,action) => {
        state.prevvalue=state.currentvalue
        state.currentvalue=action.payload
    },
  },
})


export const { breadButton} = breadCrumb.actions

export default breadCrumb.reducer