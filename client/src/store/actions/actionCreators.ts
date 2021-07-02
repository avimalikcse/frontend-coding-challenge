import * as actionTypes from './actionTypes'

export function simulateHttpRequest(action:storeAction) {
    return (dispatch: DispatchType) => {
        dispatch(action)
    }
  }