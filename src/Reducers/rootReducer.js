console.log("Call Root Reducer")
import { combineReducers } from 'redux';
import Reducer from './reducer';
import cartReducer from './cartReducer';
export default combineReducers({
    products: Reducer,
    cart: cartReducer
});