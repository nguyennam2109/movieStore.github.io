console.log("Call REDUCER")
import { FETCH_PRODUCTS_PENDING, FETCH_PRODUCTS_SUCCESS, FETCH_PRODUCTS_ERROR, ADD_TO_CART } from '../Actions/commonActions';
import { stat } from 'fs';

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
      return {
        ...state,
        pending: true
      }
    case 'FETCH_PRODUCTS_SUCCESS':
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
    case 'ADD_TO_CART':
      return {
        ...state
      }
    default:
      return state
  }
}