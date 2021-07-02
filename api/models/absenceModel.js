import { absences, members } from '../api.js'

export const getAbsenceDetails = async(offset = 0, limit = 10) => {

    const absenceData = await absences()
    const memberData = await members()
    const memberMap = {}
    memberData.forEach(member => {
        memberMap[member.userId] = member
    });
    const sortedData = absenceData.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
    const slicedPart = sortedData.map(user => { return {...user, memberDetails: memberMap[user.userId] } })
    return {
        totalCount: sortedData.length,
        data: slicedPart
    }
}