import {ADD_TO_CART, REMOVE_FROM_CART} from "../types";

export const addToCart = (product) => (dispatch, getState) =>{
    const cartItems = getState().cart.cartItems.slice();
    let alreadyExits = false;
    cartItems.forEach((x) =>{
        if(x._id === product._id){
            alreadyExits = true;
            x.count++;

        }
    });

    if(!alreadyExits){
        cartItems.push({...product, count: 1});

    }
    dispatch({
        type: ADD_TO_CART,
        payload:{cartItems},

    });

    localStorage.setItem("cartItem", JSON.stringify(cartItems));
};

export const removeFromCart = (product) => (dispatch, getState)
