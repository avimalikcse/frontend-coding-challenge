interface IMemberDetail {
    crewId:number,
    id:number,
    image:string,
    name:string,
    userId:number
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
    memberDetails:IMemberDetail
  }
  
  type AbsenceListState = {
    allAbsences: IAbsences[],
    visibleRows :IAbsences[],
    page:number,
    pageSize:number,
    loading:boolean
  }
  

  type storeAction = {
    type: string
    payload?: any
  }
  
  type DispatchType = (args: storeAction) => storeAction