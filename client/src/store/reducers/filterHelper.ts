
// function to match if two given date are sames irrespective of time 
const datesAreOnSameDay = (dateOne: Date | any, datetwo: Date) => {
    const first = new Date(dateOne)
    const second = new Date(datetwo)
    return first.getFullYear() === second.getFullYear() &&
        first.getMonth() === second.getMonth() &&
        first.getDate() === second.getDate();

}

// function that matches absence record againest applied filters 
const matchFilterConditions = (filterSet: IFilterSet[], record: IAbsences) => {
    let isFilterMatched = true
    let isStartDatMatch = true
    let isEndDateMatch = true
    filterSet.forEach(filterRow => {
        if (filterRow.value) {
            if (filterRow.type === 'absenceType') {
                // filter out bases of leave type, if user has selected all, display all
                isFilterMatched = (filterRow.value === 'all' || record.type.toLowerCase() === filterRow.value.toLowerCase())
            }

            // on bases of start Date of leave
            if (filterRow.type === 'startDate') {
                isStartDatMatch = datesAreOnSameDay(record.startDate, filterRow.value)
            }

            // on the bases of leave end date
            if (filterRow.type === 'endDate') {
                isStartDatMatch = datesAreOnSameDay(record.endDate, filterRow.value)
            }
        }
    })

    // filter is working as AND condition, it would only display results as overlap of filtered subset only
    return isFilterMatched && isStartDatMatch && isEndDateMatch
}


/**
 *  Main Filter Helper function 
 *  takes various inputs like 
 * 
 * @param filterType type of filter Applied
 * @param filterValue Value of applied filter
 * @param filterSet  existing filter set
 * @param allAbsences base absence data. filtering would be on base data only
 * 
 * output would be
 * @param filterSet updated filter set with value 
 * @param results updated absence data with matching criteria 
 */
export const filterWrapper = (filterType: string, filterValue: any, filterSet: IFilterSet[], allAbsences: IAbsences[]) => {

    const sortedFilter = filterSet.sort((a: IFilterSet, b: IFilterSet) => a.priority - b.priority) // sort the filterSet data to bases of priority

    // update the filter value to filterSet
    const updatedFilter = sortedFilter.map((filter) => {
        let item = filter
        if (item.type === filterType) {
            item.value = filterValue
        }
        return item
    }
    )

    // loopin all absence record, check whether they match applied filter criteria 
    for (let i = 0; i < allAbsences.length; i++) {
        let isFilterCriteriaMatched = matchFilterConditions(updatedFilter, allAbsences[i])
        allAbsences[i].filterOut = isFilterCriteriaMatched // true or false, only matching True would be displayed on UI
    }
    // return object with updated filtersSet and filtered absence data
    return { filterSet: updatedFilter, filterResults: allAbsences }
}

