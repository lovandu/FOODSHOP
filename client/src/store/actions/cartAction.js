import axios from 'axios';
import {
    ADD_CART,
    apiUrl,
    CART_LOADED_FAIL,
    CART_LOADED_SUCCESS,
    DELETE_CART,
    RESET_CART,
    UPDATE_CART,
} from './constants';

export const getCarts = () => async (dispatch) => {
    try {
        const response = await axios.get(`${apiUrl}/carts`);
        if (response.data.success) {
            dispatch({
                type: CART_LOADED_SUCCESS,
                payload: response.data.cart,
            });
        }
    } catch (error) {
        dispatch({ type: CART_LOADED_FAIL });
    }
};
// add cart
export const addToCart =
    ({ productId, quantity }) =>
    async (dispatch) => {
        try {
            const response = await axios.post(`${apiUrl}/carts/${productId}`, {
                quantity,
            });
            if (response.data.success) {
                dispatch({ type: ADD_CART, payload: response.data.cart });
                return response.data;
            }
        } catch (error) {
            console.log(error);
        }
    };
export const resetCart = () => async (dispatch) => {
    try {
        const response = await axios.get(`${apiUrl}/carts/reset`);
        if (response.data.success) {
            dispatch({ type: RESET_CART, payload: response.data.cart });
            return response.data;
        }
    } catch (error) {
        console.log(error);
    }
};
// find cart when user updating cart

// Update cart
export const updateCart = (updateCart) => async (dispatch) => {
    try {
        const response = await axios.post(
            `${apiUrl}/carts/${updateCart._id}`,
            updateCart,
        );
        if (response.data.success) {
            dispatch({
                type: UPDATE_CART,
                payload: response.data.cart,
            });
            return response.data;
        }
    } catch (error) {
        console.log(error);
    }
};
// Delete cart
export const deleteCart = (cartId) => async (dispatch) => {
    try {
        const response = await axios.delete(`${apiUrl}/carts/${cartId}`);
        if (response.data.success)
            dispatch({ type: DELETE_CART, payload: cartId });
    } catch (error) {
        console.log(error);
    }
};
