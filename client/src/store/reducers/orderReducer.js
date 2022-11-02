import {
    ORDER_LOADED_SUCCESS,
    ORDER_LOADED_FAIL,
    ADD_ORDER,
} from '../actions/constants';

const initialState = {
    order: null,
    orders: [],
    orderLoading: true,
};
export const orderReducer = (state=initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case ORDER_LOADED_SUCCESS:
            return {
                ...state,
                orders: payload,
                orderLoading: false,
            };
        case ORDER_LOADED_FAIL:
            return {
                ...state,
                orders: [],
                orderLoading: false,
            };
        case ADD_ORDER:
            return {
                ...state,
                orders: [...state.orders, payload],
            };
        default:
            return state;
    }
};
