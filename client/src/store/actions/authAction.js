import axios from 'axios';
// import { useEffect } from 'react';
import setAuthToken from '../../utils/setAuthToken';
import { apiUrl, LOCAL_STORAGE_TOKEN_NAME } from './constants';

// Authenticate user
export const loadUser = () => async (dispatch) => {
    if (localStorage[LOCAL_STORAGE_TOKEN_NAME]) {
        setAuthToken(localStorage[LOCAL_STORAGE_TOKEN_NAME]);
    }

    try {
        const response = await axios.get(`${apiUrl}/auth`);
        if (response.data.success) {
            dispatch({
                type: 'SET_AUTH',
                payload: { isAuthenticated: true, user: response.data.user },
            });
        }
    } catch (error) {
        localStorage.removeItem(LOCAL_STORAGE_TOKEN_NAME);
        setAuthToken(null);
        dispatch({
            type: 'SET_AUTH',
            payload: { isAuthenticated: false, user: null },
        });
    }
};

// useEffect(() => loadUser(), []);

// Login
export const loginUser =  (userForm) => async (dispatch) => {
    try {
        const response = await axios.post(`${apiUrl}/auth/login`, userForm);
        if (response.data.success)
            localStorage.setItem(
                LOCAL_STORAGE_TOKEN_NAME,
                response.data.accessToken,
            );

        await loadUser();

        return response.data;
    } catch (error) {
        if (error.response.data) return error.response.data;
        else return { success: false, message: error.message };
    }
};

// Register
export const registerUser =  (userForm) => async (dispatch) => {
    try {
        const response = await axios.post(`${apiUrl}/auth/register`, userForm);
        if (response.data.success)
            localStorage.setItem(
                LOCAL_STORAGE_TOKEN_NAME,
                response.data.accessToken,
            );

        await loadUser();

        return response.data;
    } catch (error) {
        if (error.response.data) return error.response.data;
        else return { success: false, message: error.message };
    }
};

// Logout
export const logoutUser = () => async (dispatch) => {
    localStorage.removeItem(LOCAL_STORAGE_TOKEN_NAME);
    dispatch({
        type: 'SET_AUTH',
        payload: { isAuthenticated: false, user: null },
    });
};
