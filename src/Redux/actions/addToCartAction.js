import {ADD_TO_CART} from './actionTypes';

export const addToCartAction = (user)=>{
    return {
        type:ADD_TO_CART,
        payload:user
    }
}
