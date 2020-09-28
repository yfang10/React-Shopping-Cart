import {FETCH_PRODUCTS} from "../types";
import {FILTER_PRODUCTS_BY_SIZE, ORDER_PRODUCTS_BY_PRICE} from "../types";

export const fetchProducts = () => async(dispatch) => {
    const res = await fetch("/api/products");
    const data = await res.json();

}