import {FETCH_PRODUCTS} from "../types";
import {FILTER_PRODUCTS_BY_SIZE, ORDER_PRODUCTS_BY_PRICE} from "../types";

export const fetchProducts = () => async(dispatch) => {
    const res = await fetch("/api/products");
    const data = await res.json();
    console.log(data);
    dispatch({
        type: FETCH_PRODUCTS,
        payload: data,

    });
};

export const filterProducts = (products, size) => (dispatch) =>{
    dispatch({
        type: FILTER_PRODUCTS_BY_SIZE,
        payload:{
            size: size,
            items:
            size === ""
        }
    })
}