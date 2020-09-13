import Axios from "axios"
import { CART_ADD_ITEM, CART_REMOVE_ITEM } from "../types/cart";

export const addToCart = (productId, qty) => async (dispatch) => {

    try {

        const { data } = await Axios.get('http://localhost:5000/api/product/'+productId);

        dispatch({ 
            type: CART_ADD_ITEM,
            payload: { ...data, qty}
        });

    } catch(err) {

    }

}

export const removeFromCart = (productId) => dispatch => {
    dispatch({
        type: CART_REMOVE_ITEM,
        payload: productId
    })
}