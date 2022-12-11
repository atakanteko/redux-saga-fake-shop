import { takeEvery, put, call } from "redux-saga/effects";
import fetchProducts from "../requests/fetchProducts";
import { actionTypes } from "../../constants/actionTypes";

function* handleGetProducts(){
    try {
        const products = yield call(fetchProducts);
        yield put({ type:actionTypes.GET_PRODUCTS_SUCCESS, payload: products.data });
    } catch (error) {
        yield put({ type:actionTypes.GET_PRODUCTS_FAILED, payload: error.message});    
    }
}

function* watcherProductSaga(){
    yield takeEvery(actionTypes.GET_PRODUCTS_REQUEST, handleGetProducts);
}

export default watcherProductSaga;