import { CHANGE_PRICE } from "../../types"

let initialState = {
    price: 0
}



export const AboutReducer = (state = initialState, action) => {

    switch (action.type) {
        case CHANGE_PRICE:
            return { ...state, price: action.payload }
        default:
            return state
    }

} 