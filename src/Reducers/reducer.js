console.log("Call REDUCER")
import { FETCH_PRODUCTS_PENDING, FETCH_PRODUCTS_SUCCESS, FETCH_PRODUCTS_ERROR } from '../Actions/commonActions';

const initialState = {
  pending: false,
  products: [],
  error: null
}
export default (state = initialState, action) => {
  switch (action.type) {
    case 'SIMPLE_ACTION':
      return {
        result: action.payload
      }
    case 'FETCH_PRODUCTS_PENDING':
        console.log("fetchProductsPendingREDDUCER")
      return {
        ...state,
        pending: true
      }
    case 'FETCH_PRODUCTS_SUCCESS':
      console.log("FETCH_PRODUCTS_SUCCESS",action)
      return {
        ...state,
        pending: false,
        products: action.payload
      }
    case 'FETCH_PRODUCTS_ERROR':
      return {
        ...state,
        pending: false,
        error: action.error
      }
    default:
      return state
  }
}
export const getProducts = state => state.products && console.log("products",state);
export const getProductsPending = state => state.pending && console.log("pending",state);
export const getProductsError = state => state.error;