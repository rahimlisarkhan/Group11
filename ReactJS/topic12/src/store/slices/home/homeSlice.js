import { createSlice } from '@reduxjs/toolkit'


const initialState = {
    value: 0,
  }
  
  export const homeSlice = createSlice({
    name: 'home',
    initialState,
    reducers: {
      increment: (state,action) => {
        state.value += 1
      },
      decrement: (state) => {
        state.value -= 1
      },
      incrementByAmount: (state, action) => {
        state.value += action.payload
      },
    },
  })
  
  // Action creators are generated for each case reducer function
  export const { increment, decrement, incrementByAmount } = homeSlice.actions
  
  export default homeSlice.reducer