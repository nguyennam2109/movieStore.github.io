console.log("Call Root Reducer")
import { combineReducers } from 'redux';
import products from './products';
import cart from './cart';
export default combineReducers({
    products: products,
    cart: cart
});
const getSingleProduct = (arr, productID) => arr.find(item => item.product_id === productID)
export const getCartProducts = state =>
    state.cart.map(id => id.quantity?{productID: id, quantity: id.quantity} :getSingleProduct(state.products.products, id));