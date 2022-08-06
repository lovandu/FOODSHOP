import { createContext, useReducer, useState } from 'react';
import { productReducer } from '../reducers/productReducer';
import {
    apiUrl,
    PRODUCT_LOADED_SUCCESS,
    PRODUCT_LOADED_FAIL,
    ADD_PRODUCT,
    DELETE_PRODUCT,
    UPDATE_PRODUCT,
    FIND_PRODUCT,
} from './constants';
import axios from 'axios';

export const ProductContext = createContext();

const ProductContextProvider = ({ children }) => {
    // State
    const [productState, dispatch] = useReducer(productReducer, {
        product: null,
        products: [],
        productLoading: true,
    });
    
    // Get a products
    const getAProduct = async (productId) => {
        try {
            const response = await axios.get(`${apiUrl}/products/${productId}`);
            if (response.data.success) {
                dispatch({
                    type: FIND_PRODUCT,
                    payload: response.data.product,
                });
            }
        } catch (error) {
            dispatch({ type: PRODUCT_LOADED_FAIL });
        }
    };


    const [showAddProductModal, setShowAddProductModal] = useState(false);
    const [showUpdateProductModal, setShowUpdateProductModal] = useState(false);

    // Get all products
    const getAllProducts = async () => {
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

    // Get all user products
    const getProducts = async () => {
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

    // Add product
    const addProduct = async (newProduct) => {
        try {
            const response = await axios.post(`${apiUrl}/products`, newProduct);
            if (response.data.success) {
                dispatch({ type: ADD_PRODUCT, payload: response.data.product });
                return response.data;
            }
        } catch (error) {
            return error.response.data ? error.response.data : { success: false, message: 'Server error' };
        }
    };

    // Delete Product
    const deleteProduct = async (productId) => {
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

    // Find product when user updating product
    const findProduct = (productId) => {
        const product = productState.products.find((product) => product._id === productId);
        dispatch({ type: FIND_PRODUCT, payload: product });
    };

    // Update product
    const updateProduct = async (updateProduct) => {
        try {
            const response = await axios.put(`${apiUrl}/products/${updateProduct._id}`, updateProduct);
            if (response.data.success) {
                dispatch({
                    type: UPDATE_PRODUCT,
                    payload: response.data.product,
                });
                return response.data;
            }
        } catch (error) {
            return error.response.data ? error.response.data : { success: false, message: 'Server error' };
        }
    };

    // Product context data
    const ProductContextData = {
        productState,
        getProducts,
        showAddProductModal,
        setShowAddProductModal,
        addProduct,
        deleteProduct,
        updateProduct,
        findProduct,
        showUpdateProductModal,
        setShowUpdateProductModal,
        getAllProducts,
        getAProduct,
    };

    return <ProductContext.Provider value={ProductContextData}>{children}</ProductContext.Provider>;
};

export default ProductContextProvider;
