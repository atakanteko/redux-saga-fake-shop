import { actionTypes } from "../constants/actionTypes";

export const getProducts = () => (
    {
        type: actionTypes.GET_PRODUCTS_REQUEST,
    }
)

export const selectedProduct = (product) => (
    {
        type: actionTypes.SELECTED_PRODUCT,
        payload: product,
    }
)