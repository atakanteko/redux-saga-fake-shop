import { actionTypes } from "../constants/actionTypes";

const INITIAL_STATE ={
    products: [],
    loading: false,
    hasError: null,
}

export const productReducer = (state = INITIAL_STATE, { type, payload }) => {
    switch(type){
        case actionTypes.GET_PRODUCTS_REQUEST:
            return { ...state, loading: true };
        case actionTypes.GET_PRODUCTS_SUCCESS:
            return { ...state, loading: false, products: payload };
        case actionTypes.GET_PRODUCTS_FAILED:
            return { ...state, loading: false, hasError: payload };
        default:
            return state;    
    }
}
