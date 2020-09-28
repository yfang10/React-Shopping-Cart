import {ADD_To_CART, REMOVE_FROM_CART} from '../types';

export const cartReducer = (
    state = {cartItem: JSON.parse(localStorage.getItem("cartItems") || [""])},
    action 
) => {
    switch(action.type){
        case ADD_To_CART:
            return{cartItem: action.payload.cartItems};

        case REMOVE_TO_CART:
            return{cartItem: action.payload.cartItems};
        
        default: 
             return state;

    }
};