import { combineReducers } from "redux"
import { AboutReducer } from "./about"
import { HomeReducer } from "./home"



const reducers = combineReducers({
    home:HomeReducer,
    about:AboutReducer
})

export default reducers