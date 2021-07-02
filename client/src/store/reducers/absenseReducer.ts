import * as actionTypes from "./../actions/actionTypes"

const initialState: AbsenceListState = {
    allAbsences: [],
    visibleRows: [],
    page: 1,
    pageSize: 10,
    loading: true
}

const absenceReducer = (
    state: AbsenceListState = initialState,
    action: storeAction
): AbsenceListState => {
    switch (action.type) {
        case actionTypes.ADD_ARTICLE:
            return {
                ...state,
            }
        case actionTypes.REMOVE_ARTICLE:
            return {
                ...state,
            }
    }
    return state
}

export default absenceReducer