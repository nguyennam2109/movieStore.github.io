console.log("Call Root Reducer")
import { combineReducers } from 'redux';
import simpleReducer from './reducer';
export default combineReducers({
 simpleReducer
});