export const apiUrl =
    process.env.NODE_ENV !== 'production'
        ? 'http://localhost:5000/api'
        : 'https://sleepy-inlet-56101.herokuapp.com/api';

export const LOCAL_STORAGE_TOKEN_NAME = 'learnit-mern';



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
export const RESET_CART = 'RESET_CART';
export const FIND_CART = 'FIND_CART';

export const ORDER_LOADED_SUCCESS = 'ORDER_LOADED_SUCCESS';
export const ORDER_LOADED_FAIL = 'ORDER_LOADED_FAIL';
export const ADD_ORDER = 'ADD_ORDER';


// convert category
export const FOOD='Đồ Ăn'
export const BEVERAGE='Đồ Uống'
export const DRY='Đồ Khô'

