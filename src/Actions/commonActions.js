console.log("Call ACTION")
const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';
export const FETCH_PRODUCTS_PENDING   = 'FETCH_PRODUCTS_PENDING';
export const FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS';
export const FETCH_PRODUCTS_ERROR = 'FETCH_PRODUCTS_ERROR';
const simpleAction = () => dispatch => {
    dispatch({
        type: 'SIMPLE_ACTION',
        payload: 'result_of_simple_action'
    })
}

export const fetchProductsPending = () => dispatch => {
    console.log("fetchProductsPendingACTION")
    dispatch({
        type: 'FETCH_PRODUCTS_PENDING'
    })
}
export const fetchProductsSuccess = (products) => dispatch => {
    dispatch({
        type: 'FETCH_PRODUCTS_SUCCESS',
        payload: products
    })
}
export const fetchProductsError = (error) => dispatch => {
    dispatch({
        type: 'FETCH_PRODUCTS_ERROR',
        payload: error
    })
}
export const addToCart = (id) => dispatch => {
    dispatch({
        type: 'ADD_TO_CART',
        id : id 
    })
}
export function generateUniqueId() {
    return Math.floor(new Date().getTime() * Math.random()) + "";
}
export const VisibilityFilters = (filter) => {
    return{ type: SET_VISIBILITY_FILTER, filter }
}
export default simpleAction;