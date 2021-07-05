import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { requestAbsenceDataFromServer } from "../../../store/actions/actionCreators";
import ErrorBoundary from "../../shared/errorLayer";
import loadingWrapper from "../../shared/loader";
import Paginator from "../../shared/pagination";
import AbsenceTable from "./absenceTable";

/**
 * Main Dashboard file that render spinner while loading and results within Error boundary
 */

// Loader HOC
const AbsenceTableWithLoader = loadingWrapper(AbsenceTable);

function Dashboard() {
  const dispatch = useDispatch();
  const pageSize = 10; // number of items per page
  const [page, setPage] = useState(1); // page, to identity current page
  const { loading, allAbsences } = useSelector(
    (state: RootState) => state.absenceState
  ); // loading and absence details from redux state
  let [paginatedAbsenceData, setPaginatedAbsenceData] = useState<
    IAbsences[] | []
  >([]); // state value to use be used as display results

  // create dispatch object

  // load data from server
  useEffect(() => {
    dispatch(requestAbsenceDataFromServer());
  }, []); // fetch and update store state to with absence data

  const updatePageData = () => {
    const startingIndex = page === 1 ? 0 : (page - 1) * 10; // starting index of pagination
    const endingIndex = page * pageSize; // page's last index
    setPaginatedAbsenceData(allAbsences.slice(startingIndex, endingIndex)); // slice the paginated data
  };

  useEffect(() => {
    updatePageData();
  }, [page, allAbsences]); // update the page data on change of page/absence data

  useEffect(() => {
    setPage(1);
  }, [allAbsences]); // if user is on page>1 and use filters, it will reset the current page to 1

  return (
    <ErrorBoundary>
      <h1>Total Number of records : {allAbsences.length}</h1>
      <AbsenceTableWithLoader
        loading={loading}
        allAbsences={paginatedAbsenceData}
      ></AbsenceTableWithLoader>
      <Paginator
        page={page}
        size={allAbsences.length}
        pageHandler={setPage}
      ></Paginator>
    </ErrorBoundary>
  );
}

export default Dashboard;
