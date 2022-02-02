import { GET_JOKES } from "../type"


let initialState = {
    jokes:[],
}


export const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_JOKES:
            return {
                ...state, jokes: action.payload
            }
            default:
                return state
    }
}