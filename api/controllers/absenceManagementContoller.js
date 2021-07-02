import { getAbsenceDetails } from "../models/absenceModel.js"


export const getAbsencesList = async(req, res) => {
    0
    const offset = (req.query.page - 1) * req.query.pageSize || 0
    const limit = req.query.page * req.query.pageSize
    const data = await getAbsenceDetails(offset, limit)
    res.send(data)

}