import { combineReducers } from 'redux';
import { cartReducer } from './cartReducer';
import { productModalReducer } from './productModalReducer';
import { productReducer } from './productReducer';
import { orderReducer } from './orderReducer';
import { authReducer } from './authReducer';

const rootReducer = combineReducers({
    auth: authReducer,
    product: productReducer,
    productModal: productModalReducer,
    cart: cartReducer,
    order: orderReducer,
});

export default rootReducer;
