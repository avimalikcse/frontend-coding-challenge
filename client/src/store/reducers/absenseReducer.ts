import * as actionTypes from "./../actions/actionTypes"
import { filterWrapper } from "./filterHelper"

// initial filter set
const initialFilterSet = [
    {
        type: 'absenceType',
        priority: 1,
        value: null,
        objectPath: 'type'
    },
    {
        type: 'startDate',
        priority: 2,
        value: null,
        objectPath: 'startDate',
    },
    {
        type: 'endDate',
        priority: 3,
        value: null,
        objectPath: 'endDate'
    },
]

// initial state data 
export const initialState: AbsenceListState = {
    allAbsences: [],
    rawAbsences: [],
    page: 1,
    pageSize: 10,
    loading: true,
    totalRecords: 0,
    filterSet: initialFilterSet
}


const absenceReducer = (
    state: AbsenceListState = initialState,
    action: storeAction
): AbsenceListState => {
    switch (action.type) {
        case actionTypes.REQUEST_DATA:
            return {
                ...state,
                loading: true // set loading true, while api is in progress 
            }
        case actionTypes.RECEIVE_DATA:
            const absenceData = action.payload.results.map((row: any) => { return { ...row, filterOut: false } })
            return {
                ...state,
                loading: false, // set loading false, as API response is complete 
                rawAbsences: absenceData, // to be used as a base results, filter on this data only
                allAbsences: absenceData // always updated/filtered data, a subset of rawAbsence in case of filter is applied 
            }

        case actionTypes.CLEAR_FILTERS:
            const resetFilter = state.rawAbsences
            return {
                ...state,
                allAbsences: resetFilter,
                filterSet: state.filterSet.map(row => { return { ...row, value: null } }) // clear the filterSet
            }
        case actionTypes.APPLY_FILTER:
            const { filterType, filterValue } = action.payload
            const filterSetOld = [...state.filterSet]
            const { filterSet, filterResults } = filterWrapper(filterType, filterValue, filterSetOld, state.rawAbsences)
            return {
                ...state,
                loading: false,
                filterSet: filterSet,
                allAbsences: filterResults.filter(row => row.filterOut) // filter Out not applicable results before printing to UI
            }
    }
    return state
}



export default absenceReducer