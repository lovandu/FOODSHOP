import axios from 'axios';
import {
    ADD_PRODUCT,
    ADD_SHOW_PRODUCT_MODAL,
    apiUrl,
    DELETE_PRODUCT,
    FIND_PRODUCT,
    GET_PRODUCT,
    PRODUCT_LOADED_FAIL,
    PRODUCT_LOADED_SUCCESS,
    UPDATE_PRODUCT,
    UPDATE_SHOW_PRODUCT_MODAL,
} from './constants';

// Add product
export const addProduct =
    (newProduct) => async (dispatch) => async (dispatch) => {
        try {
            const response = await axios.post(`${apiUrl}/products`, newProduct);
            if (response.data.success) {
                dispatch({ type: ADD_PRODUCT, payload: response.data.product });
                return response.data;
            }
        } catch (error) {
            return error.response.data
                ? error.response.data
                : { success: false, message: 'Server error' };
        }
    };

// Get a products
export const getAProduct = (productId) => async (dispatch) => {
    try {
        const response = await axios.get(`${apiUrl}/products/${productId}`);
        if (response.data.success) {
            dispatch({
                type: GET_PRODUCT,
                payload: response.data.product,
            });
        }
    } catch (error) {
        dispatch({ type: PRODUCT_LOADED_FAIL });
    }
};

// Get all products
export const getAllProducts = () => async (dispatch) => {
    try {
        const response = await axios.get(`${apiUrl}/products/allproducts`);
        if (response.data.success) {
            dispatch({
                type: PRODUCT_LOADED_SUCCESS,
                payload: response.data.products,
            });
        }
    } catch (error) {
        dispatch({ type: PRODUCT_LOADED_FAIL });
    }
};

// get products by name
// Get all products
export const getProductsByName = (name) => async (dispatch) => {
    try {
        const response = await axios.get(`${apiUrl}/products/search/${name}`);
        if (response.data.success) {
            dispatch({
                type: PRODUCT_LOADED_SUCCESS,
                payload: response.data.products,
            });
        }
    } catch (error) {
        dispatch({ type: PRODUCT_LOADED_FAIL });
    }
};

//  get products by category
export const getProductsByCategory = (category) => async (dispatch) => {
    try {
        const response = await axios.get(`${apiUrl}/products/${category}`);
        if (response.data.success) {
            dispatch({
                type: PRODUCT_LOADED_SUCCESS,
                payload: response.data.products,
            });
        }
    } catch (error) {
        dispatch({ type: PRODUCT_LOADED_FAIL });
    }
};

// Get all user products
export const getProducts = () => async (dispatch) => {
    try {
        const response = await axios.get(`${apiUrl}/products`);
        if (response.data.success) {
            dispatch({
                type: PRODUCT_LOADED_SUCCESS,
                payload: response.data.products,
            });
        }
    } catch (error) {
        dispatch({ type: PRODUCT_LOADED_FAIL });
    }
};

// Delete Product
export const deleteProduct = (productId) => async (dispatch) => {
    try {
        const response = await axios.delete(`${apiUrl}/products/${productId}`);
        console.log('first', response);
        if (response.data.success) {
            console.log('Hello');
            dispatch({ type: DELETE_PRODUCT, payload: productId });
        }
    } catch (error) {
        console.log(error);
    }
};

export const setShowAddProductModal = (value) => (dispatch) => {
    dispatch({
        type: ADD_SHOW_PRODUCT_MODAL,
        payload: value,
    });
};
export const setShowUpDateProductModal = (value) => (dispatch) => {
    dispatch({
        type: UPDATE_SHOW_PRODUCT_MODAL,
        payload: value,
    });
};

// Find product when user updating product
export const findProduct = (productId) => async (dispatch) => {
    dispatch({ type: FIND_PRODUCT, payload: productId });
};

// Update product
export const updateProduct = (updateProduct) => async (dispatch) => {
    try {
        const response = await axios.put(
            `${apiUrl}/products/${updateProduct._id}`,
            updateProduct,
        );
        if (response.data.success) {
            dispatch({
                type: UPDATE_PRODUCT,
                payload: response.data.product,
            });
            return response.data;
        }
    } catch (error) {
        return error.response.data
            ? error.response.data
            : { success: false, message: 'Server error' };
    }
};

//  const [showAddProductModal, setShowAddProductModal] = useState(false);
//  const [showUpdateProductModal, setShowUpdateProductModal] =
//     useState(false);
