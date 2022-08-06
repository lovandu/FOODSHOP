import axios from 'axios';
import React, { createContext, useReducer } from 'react';
import { cartReducer } from '../reducers/cartReducer';
import {
    ADD_CART,
    apiUrl,
    CART_LOADED_FAIL,
    CART_LOADED_SUCCESS,
    DELETE_CART,
    RESET_CART,
    UPDATE_CART,
} from './constants';

export const CartContext = createContext();
const CartContextProvider = ({ children }) => {
    const [cartState, dispatch] = useReducer(cartReducer, {
        cart: [],
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
            dispatch({ type: CART_LOADED_FAIL });
        }
    };
    // add cart
    const addToCart = async ({ productId, quantity }) => {
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
    const resetCart = async () => {
        try {
            const response = await axios.post(`${apiUrl}/carts/reset`);
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
    const updateCart = async (updateCart) => {
        try {
            const response = await axios.put(
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
    const deleteCart = async (cartId) => {
        try {
            const response = await axios.delete(`${apiUrl}/carts/${cartId}`);
            if (response.data.success)
                dispatch({ type: DELETE_CART, payload: cartId });
        } catch (error) {
            console.log(error);
        }
    };

    const CartContextData = {
        addToCart,
        resetCart,
        cartState,
        getCarts,
        updateCart,
        deleteCart,
    };
    return (
        <CartContext.Provider value={CartContextData}>
            {children}
        </CartContext.Provider>
    );
};

export default CartContextProvider;
