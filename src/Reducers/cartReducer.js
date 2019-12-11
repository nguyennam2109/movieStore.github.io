console.log("Call REDUCER")
import { ADD_TO_CART } from '../Actions/commonActions';

const initialState = {
    items:[],
    addedItems: [],
    total: 0
}
export default (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TO_CART':
            console.log("ADD_TO_CART",state)
            // let addedItem = state.products.products.find(item => item.id === action.id)
            // console.log("ADD_TO_CART",addedItem)
            return {
                ...state,
                id: false
              }  
        default:
            return state
    }
}