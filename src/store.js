import {createStore, applyMiddleware, compose, combineReducers} from  "redux";
import thunk from "redux-thunk";
import {productsReducer} from "./reducers/productReducers";
import {cartReducer} from "./reducers/cartReducers";
import {orderReducer} from "./reducers/orderReducers";

const initialState = {};
const composeEnhancer = window._REDUX_DEVTOOLS_EXTENSION_COMPOSE_ || compose;
const store = createStore(
    combineReducers({
        products: productsReducer,
        cart: cartReducer,
        order: orderReducer,
    }),
    initialState,
    composeEnhancer(aplyMiddleware(thunk))
);
export default store;