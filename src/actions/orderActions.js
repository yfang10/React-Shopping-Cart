import{CREATE_ORDER, CLEAR_CART, CLEAR_ORDER, FETCH_ORDER} from "../types";

export const createOrder = (order) => (dispatch) => {
    fetch("/api/orders",{
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        }
    })
}