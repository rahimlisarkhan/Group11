export let initialState = {
    count: 0,
    isLoading: false,
    movies: [],
    jokes: []
}

export let myMuradReducer = (state, action) => {

    switch (action.type) {
        case "ARTIR":
            return { ...state, count: action.payload }
        case "LOADING":
            return { ...state, isLoading: action.payload }
        case "GETJOKES":
                return { ...state, jokes: action.payload }
        default:
            return state
    }
}
