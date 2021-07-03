import * as actionTypes from "./../actions/actionTypes"

const initialState: AbsenceListState = {
    allAbsences: [],
    page: 1,
    pageSize: 10,
    loading: true,
    totalRecords: 0
}

const absenceReducer = (
    state: AbsenceListState = initialState,
    action: storeAction
): AbsenceListState => {
    switch (action.type) {
        case actionTypes.REQUEST_DATA:
            return {
                ...state,
                loading: true
            }
        case actionTypes.RECEIVE_DATA:
            const absenceData = action.payload.results.map((row:any) => { return { ...row, filterOut: false } })
            return {
                ...state,
                loading: false,
                allAbsences: absenceData
            }
        case actionTypes.CLEAR_FILTERS:
            const resetFilter = state.allAbsences.map(row => { return { ...row, filterOut: false } })
            return {
                ...state,
                loading: false,
                allAbsences: resetFilter
            }
        case actionTypes.APPLY_FILTER:
            const filteredData = state.allAbsences.map(row => { return { ...row, filterOut: false } })
            return {
                ...state,
                loading: false,
                allAbsences: filteredData
            }
    }
    return state
}

export default absenceReducer