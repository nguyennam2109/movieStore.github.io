console.log("Call ACTION")
const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER'
const simpleAction = () => dispatch => {
    dispatch({
        type: 'SIMPLE_ACTION',
        payload: 'result_of_simple_action'
    })
}
export function generateUniqueId() {
    return Math.floor(new Date().getTime() * Math.random()) + "";
}
export const VisibilityFilters = (filter) => {
    return{ type: SET_VISIBILITY_FILTER, filter }
}
export default simpleAction;