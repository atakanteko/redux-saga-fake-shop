import { actionTypes } from "../constants/actionTypes";

export const setProducts = (products) => (
    {
        type: actionTypes.SET_PRODUCTS,
        payload: products,
    }
)

export const selectedProduct = (product) => (
    {
        type: actionTypes.SELECTED_PRODUCT,
        payload: product,
    }
)