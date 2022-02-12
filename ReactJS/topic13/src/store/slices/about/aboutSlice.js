
import { createSlice } from '@reduxjs/toolkit'



const initialState = {
    jokes: []
}

export const aboutSlice = createSlice({
    name: "about",
    initialState,
    reducers: {
        fillJokes: (state, action) => {
            state.jokes = [...state.jokes, ...action.payload]
        }
    }
});


export const { fillJokes } = aboutSlice.actions

export default aboutSlice.reducer