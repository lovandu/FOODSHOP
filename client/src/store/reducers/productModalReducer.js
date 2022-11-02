import { ADD_SHOW_PRODUCT_MODAL, UPDATE_SHOW_PRODUCT_MODAL } from "../actions/constants"

const initialState ={
    addModal:false,
    updateModal:false
}

export const productModalReducer = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case ADD_SHOW_PRODUCT_MODAL:
            return {
                ...state,
                addModal: payload,
            };
        case UPDATE_SHOW_PRODUCT_MODAL:
            return {
                ...state,
                updateModal: payload,
            };

        default:
            return state;
    }
};