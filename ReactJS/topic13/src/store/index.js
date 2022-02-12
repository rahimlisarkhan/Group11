import { configureStore } from '@reduxjs/toolkit'
import aboutSlice from './slices/about/aboutSlice'
import homeReducer from "./slices/home/homeSlice"


export const store = configureStore({
  reducer: {
      home:homeReducer,
      about:aboutSlice
  },
})