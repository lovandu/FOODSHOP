import { CART_LOADED_SUCCESS, ADD_CART } from '../contexts/constants';

import React from 'react';

export const cartReducer = (state, action) => {
    const { type, payload } = action;
    switch (type) {
        case PRODUCT_LOADED_FAIL:
            return { ...state, cart: null, cartLoading: false };
        case CART_LOADED_SUCCESS:
            return {
                ...state,
                cart: payload,
                cartLoading: false,
            };
        case ADD_CART:
            return {
                ...state,
                cart: payload,
            };
        default:
            return state;
    }
};
