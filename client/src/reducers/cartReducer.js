import { CART_LOADED_SUCCESS, ADD_CART, CART_LOADED_FAIL, UPDATE_CART, DELETE_CART } from '../contexts/constants';


export const cartReducer = (state, action) => {
    const { type, payload } = action;
    switch (type) {
        case CART_LOADED_FAIL:
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
        case UPDATE_CART:
            return {
                ...state,
                cart: payload,
            };
        case DELETE_CART:
            return {
                ...state,
                cart: [],
            };
        default:
            return state;
    }
};
