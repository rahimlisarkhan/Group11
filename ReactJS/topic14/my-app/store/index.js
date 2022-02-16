import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './homeSlice'
export const store = configureStore({
  reducer: {
      home:counterReducer
  },
})