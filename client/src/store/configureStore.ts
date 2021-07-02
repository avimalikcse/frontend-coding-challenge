import { createStore, applyMiddleware, Store } from "redux"
import thunk from "redux-thunk"
import rootReducer from "./reducers/rootReducer"

const store: Store<any, storeAction> & {
    dispatch: DispatchType
  } = createStore(rootReducer, applyMiddleware(thunk))
  
export default store