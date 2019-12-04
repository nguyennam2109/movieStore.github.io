console.log("Call ACTION")
const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER'
const simpleAction = () => dispatch => {
    dispatch({
        type: 'SIMPLE_ACTION',
        payload: 'result_of_simple_action'
    })
}

export const fetchProductsPending = () => dispatch => {
    dispatch({
        type: 'FETCH_PRODUCTS_PENDING'
    })
}
export const fetchProductsSuccess = (products) => dispatch => {
    dispatch({
        type: 'FETCH_PRODUCTS_SUCCESS',
        products: products
    })
}
export const fetchProductsError = (error) => dispatch => {
    dispatch({
        type: 'FETCH_PRODUCTS_ERROR',
        error: error
    })
}

export function generateUniqueId() {
    return Math.floor(new Date().getTime() * Math.random()) + "";
}
export const VisibilityFilters = (filter) => {
    return{ type: SET_VISIBILITY_FILTER, filter }
}
export default simpleAction;