import React, { createContext, useReducer } from 'react';
import { orderReducer } from '../reducers/orderReducer';
import {
    apiUrl,
    ORDER_LOADED_SUCCESS,
    ORDER_LOADED_FAIL,
    ADD_ORDER,
} from '../contexts/constants';
import axios from 'axios';

export const OrderContext = createContext();

const OrderContextProvider = ({ children }) => {
    const [orderState, dispatch] = useReducer(orderReducer, {
        order: null,
        orders: [],
        orderLoading: true,
    });
    const getOrders = async () => {
        try {
            const response = await axios.get(`${apiUrl}/orders`);
            if (response.data.success) {
                dispatch({
                    type: ORDER_LOADED_SUCCESS,
                    payload: response.data.orders,
                });
            }
        } catch (error) {
            dispatch({ type: ORDER_LOADED_FAIL });
        }
    };

    const addOrders = async (newOrder) => {
        try {
            const response = await axios.post(`${apiUrl}/orders`, newOrder);
            if (response.data.success) {
                dispatch({
                    type: ADD_ORDER,
                    payload: response.data.order,
                });
                return response.data;
            }
        } catch (error) {
            return error.response.data
                ? error.response.data
                : { success: false, message: 'Server error' };
        }
    };

    const OrderContextData = { getOrders, addOrders, orderState };
    return (
        <OrderContext.Provider value={OrderContextData}>
            {children}
        </OrderContext.Provider>
    );
};

export default OrderContextProvider;
