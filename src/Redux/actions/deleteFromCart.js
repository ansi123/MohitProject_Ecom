import { DELETE_FROM_CART } from "./actionTypes";


export const deleteFromCart = (user)=>{
    return {
        type:DELETE_FROM_CART,
        payload:user,
    }
}
