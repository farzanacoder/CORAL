import { configureStore } from '@reduxjs/toolkit'
import breadCrumb from './slices/breadCrumb'

export default configureStore({
  reducer: {
    bread: breadCrumb,
  },
})