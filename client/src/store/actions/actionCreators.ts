import APIWrapper from '../../utils/APIWrapper'
import * as actionTypes from './actionTypes'

const API = new APIWrapper()

export function requestAbsenceDataFromServer() {
    return async (dispatch: DispatchType) => {
        dispatch({type:actionTypes.REQUEST_DATA})
        const data= await API.get('http://localhost:5000/api/get-absences-list')
        dispatch({type:actionTypes.RECEIVE_DATA,payload:{results:data.data}})

    }
  }