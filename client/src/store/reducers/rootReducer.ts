import { combineReducers } from "redux"
import absenceReducer from './../reducers/absenseReducer'
const rootReducer = combineReducers({absenceState:absenceReducer})
export default rootReducer