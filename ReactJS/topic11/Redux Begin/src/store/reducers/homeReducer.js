import { ARTIR } from "../type"


let initialState = {
    price:0,
}


export const homeReducer = (state = initialState, action) => {
    switch (action.type) {
        case ARTIR:
            return {
                ...state, price: action.payload
            }
            default:
                return state
    }
}