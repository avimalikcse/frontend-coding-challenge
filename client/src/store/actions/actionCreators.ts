import APIWrapper from '../../utils/APIWrapper'
import * as actionTypes from './actionTypes'

const API = new APIWrapper()

// Action creator to sense API call is triggered and as well as got data from server
export function requestAbsenceDataFromServer() {
    return async (dispatch: DispatchType) => {
        dispatch({ type: actionTypes.REQUEST_DATA }) // dispatch request initiated action type, right place to set display loading spinner
        const data = await API.get('http://localhost:5000/api/get-absences-list')
        dispatch({ type: actionTypes.RECEIVE_DATA, payload: { results: data.data } }) // update the store state with API response

    }
}

// action to apply Filter, 
/**
 * 
 * @param filterType type of filter applied
 * @param filterValue  filter value 
 */
export function applyFilter(filterType: string, filterValue: any) {
    return async (dispatch: DispatchType) => {
        dispatch({ type: actionTypes.APPLY_FILTER, payload: { filterType, filterValue } })

    }
}

// reset all the filters 
export function resetFilter() {
    return async (dispatch: DispatchType) => {
        dispatch({ type: actionTypes.CLEAR_FILTERS })

    }
}