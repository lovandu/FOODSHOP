export const apiUrl =
    process.env.NODE_ENV !== 'production'
        ? 'http://localhost:5000/api'
        : 'https://sleepy-inlet-56101.herokuapp.com/api';

export const LOCAL_STORAGE_TOKEN_NAME = 'learnit-mern';

export const POSTS_LOADED_SUCCESS = 'POSTS_LOADED_SUCCESS';
export const POSTS_LOADED_FAIL = 'POSTS_LOADED_FAIL';
export const ADD_POST = 'ADD_POST';
export const DELETE_POST = 'DELETE_POST';
export const UPDATE_POST = 'UPDATE_POST';
export const FIND_POST = 'FIND_POST';

export const PRODUCT_LOADED_SUCCESS = 'PRODUCT_LOADED_SUCCESS';
export const PRODUCT_LOADED_FAIL = 'PRODUCT_LOADED_FAIL';
export const ADD_PRODUCT = 'ADD_PRODUCT';
export const DELETE_PRODUCT = 'DELETE_PRODUCT';
export const UPDATE_PRODUCT = 'UPDATE_PRODUCT';
export const FIND_PRODUCT = 'FIND_PRODUCT';

export const CART_LOADED_SUCCESS = 'CART_LOADED_SUCCESS';
export const CART_LOADED_FAIL = 'CART_LOADED_FAIL';
export const ADD_CART = 'ADD_CART';
export const DELETE_CART = 'DELETE_CART';
export const UPDATE_CART = 'UPDATE_CART';
export const FIND_CART = 'FIND_CART';