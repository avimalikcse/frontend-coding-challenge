interface IMemberDetail {
    crewId:number,
    id:number,
    image:string,
    name:string,
    userId:number
}

interface IFilterSet {

  type:string,
  value:any,
  priority:number,
  objectPath:string,

}

interface IAbsences {
    admitterId: number
    admitterNote: string
    confirmedAt: string
    confirmedAt: string,
    createdAt:string,
    crewId:number,
    endDate:string,
    id:number,
    memberNote:string,
    rejectedAt:string,
    startDate:string,
    type:string,
    userId:number,
    memberDetails:IMemberDetail,
    status:string,
    filterOut:boolean
  }
  


  type AbsenceListState = {
    allAbsences: IAbsences[],
    rawAbsences:IAbsences[],
    totalRecords:number
    page:number,
    pageSize:number,
    loading:boolean,
    filterSet:IFilterSet[]
  }
  

  type storeAction = {
    type: string
    payload?: any
  }
  
  type DispatchType = (args: storeAction) => storeAction

  type RootState = {
    absenceState:AbsenceListState
  }

  type AppDispatch = typeof store.dispatch

  declare global {
    interface Window {
      __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
  }