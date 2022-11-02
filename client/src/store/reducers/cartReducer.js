import {
    CART_LOADED_SUCCESS,
    ADD_CART,
    CART_LOADED_FAIL,
    UPDATE_CART,
    DELETE_CART,
    RESET_CART,
} from '../actions/constants';

const initialState = {
    cart: [],
    cartLoading: true,
};

export const cartReducer = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case CART_LOADED_FAIL:
            return { ...state, cart: [], cartLoading: false };
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
        case RESET_CART:
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
