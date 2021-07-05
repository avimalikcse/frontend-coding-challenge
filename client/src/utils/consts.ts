export const emptyState =
{
    allAbsences: [],
    rawAbsences: [],
    page: 1,
    pageSize: 10,
    loading: true,
    totalRecords: 0,
    filterSet: [],
}
export const mockedAPIResponse =
{
    totalCount: 1,
    data: [
        {
            admitterId: null,
            admitterNote: "",
            confirmedAt: null,
            createdAt: "2021-06-30T02:13:56.000+02:00",
            crewId: 352,
            endDate: "2021-08-12",
            id: 6886,
            memberNote: "test member Note",
            rejectedAt: null,
            startDate: "2021-08-05",
            type: "vacation",
            userId: 2735,
            memberDetails: {
                crewId: 352,
                id: 2950,
                image: "https://loremflickr.com/300/400",
                name: "Manuel",
                userId: 2735
            },
            status: "Requested"
        },
    ]
} 

export const filledState =
{
    allAbsences: mockedAPIResponse.data,
    rawAbsences: mockedAPIResponse.data,
    page: 1,
    pageSize: 10,
    loading: false,
    totalRecords: 0,
    filterSet: [],
}

