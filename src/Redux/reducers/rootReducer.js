import {combineReducers} from 'redux';
import {reducer} from './index';
import {addToCartReducer} from './addToCartReducer'
const rootReducer = combineReducers({
    apiFetch:reducer,
    addToCart:addToCartReducer
})

export default rootReducer;












