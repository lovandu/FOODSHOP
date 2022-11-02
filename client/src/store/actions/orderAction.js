import axios from "axios";
import { ADD_ORDER, apiUrl, ORDER_LOADED_FAIL, ORDER_LOADED_SUCCESS } from "./constants";

export const getOrders =  () => async(dispatch)=> {
    try {
        const response = await axios.get(`${apiUrl}/orders`);
        if (response.data.success) {
            dispatch({
                type: ORDER_LOADED_SUCCESS
                ,
                payload: response.data.orders,
            });
        }
    } catch (error) {
        dispatch({ type: ORDER_LOADED_FAIL });
    }
};

export const addOrders =  (newOrder) => async (dispatch) => {
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
