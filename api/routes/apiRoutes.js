import express from 'express';
import { getAbsencesList } from './../controllers/absenceManagementContoller.js'

const router = express.Router()

router.get('/get-absences-list', getAbsencesList)

export default router