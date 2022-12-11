import { actionTypes } from "../constants/actionTypes";

const INITIAL_STATE ={
    products: [
        {
            id: 1,
            title: 'LOTR',
            category: 'BOOK'
        }
    ]
}

export const productReducer = (state = INITIAL_STATE, {type, payload}) => {
    switch(type){
        case actionTypes.SET_PRODUCTS:
            return state;
        default:
            return state;    
    }
}
