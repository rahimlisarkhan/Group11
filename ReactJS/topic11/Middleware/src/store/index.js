import { createStore,applyMiddleware } from "redux"
import reducers from "./reducers"
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';


//Eger Middleware istifade olunmasa 
// export const store = createStore(
//                             reducers,
//                             window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
//                             )

export const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));
