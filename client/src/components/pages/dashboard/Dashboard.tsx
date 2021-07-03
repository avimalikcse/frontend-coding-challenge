import React, { useEffect } from 'react';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import { requestAbsenceDataFromServer } from '../../../store/actions/actionCreators';
import loadingWrapper from '../../shared/loader';
import AbsenceTable from './absenceTable';

const AbsenceTableWithLoader = loadingWrapper(AbsenceTable);

function Dashboard() {
    const {loading,allAbsences} = useSelector((state: RootState) => state.absenceState)
    const dispatch = useDispatch()

    useEffect(() => {
      dispatch(requestAbsenceDataFromServer())
    },[]);

  return (
    <AbsenceTableWithLoader loading={loading} allAbsences={allAbsences}></AbsenceTableWithLoader>
  );
}

export default Dashboard