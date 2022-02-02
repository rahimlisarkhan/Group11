import { combineReducers } from 'redux'
import { homeReducer } from './homeReducer'
import { productReducer } from './productReducer'


 const reducers = combineReducers({
    homeReducer,
    productReducer
})

export default reducers