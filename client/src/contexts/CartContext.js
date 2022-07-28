import axios from 'axios';
import React, { createContext, useReducer } from 'react';
import cartReducer from '../reducers/cartReducer';
import { ADD_CART, apiUrl, CART_LOADED_SUCCESS } from './constants';

export const CartContext = createContext();
const CartContextProvider = ({ children }) => {
    const [cartState, dispatch] = useReducer(cartReducer, {
        cart: null,
        cartLoading: true,
    });
    // Get all user carts 
    const getCarts = async () => {
        try {
            const response = await axios.get(`${apiUrl}/carts`);
            if (response.data.success) {
                dispatch({
                    type: CART_LOADED_SUCCESS,
                    payload: response.data.cart,
                });
            }
        } catch (error) {
            dispatch({ type: PRODUCT_LOADED_FAIL });
        }
    };
    // add cart
    const addCart = async (newCart) => {
        try {
            const response = await axios.post(`${apiUrl}/carts`, newCart);
            if (response.data.success) {
                dispatch({ type: ADD_CART, payload: response.data.cart });
                return response.data;
            }
        } catch (error) {
            return error.response.data ? error.response.data : { success: false, message: 'Server error' };
        }
    };

    const CartContextData = {addCart, cartState,getCarts};
    return <CartContext.Provider value={CartContextData}>{children}</CartContext.Provider>;
};

export default CartContextProvider;
