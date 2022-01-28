
export const initialHomeState = {
    menu: ["home", "about"],
    count: 0,
    isLoading: false,
    products: [],
    offers:[],
}

export const homeReducer = (state, action) => {
    switch (action.type) {
        case 'ARTIR':
            return { ...state, count: action.payload }
        case "AZALT":
            return { ...state, count: action.payload }
        case "GETPRODUCTS":
            return { ...state, products: action.payload }
        default:
            return state
    }
}
