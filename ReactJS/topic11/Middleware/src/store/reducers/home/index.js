import { FILL_JOKES } from "../../types"

let initialState ={
    jokes:[],
}


export const HomeReducer = (state = initialState,action) =>{
    switch (action.type){
        case FILL_JOKES:
            return {...state ,jokes:action.payload}
        default:
            return state
    }
}