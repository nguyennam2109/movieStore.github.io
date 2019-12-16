import { ADD_TO_CART } from '../Actions/commonActions';
const initialState = {
    addedID: [],
    quantity: 0
}
export default (state = initialState.addedID, action) => {
    switch (action.type) {
        case 'ADD_TO_CART':
            if (state.indexOf(action.id) !== -1) {
                return state
            }
            return [...state,action.id]
        // return {
        //     ...state,
        //     id: action.id
        //   }  
        default:
            return state
    }
}