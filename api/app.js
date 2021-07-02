import 'dotenv/config'
import express from 'express';
import cors from 'cors'
import apiRoutes from '../api/routes/apiRoutes.js'

const app = express();

app.use(cors())

app.use('/api', apiRoutes)

app.listen(process.env.PORT || 5000, () =>
    console.log(`API server listening on port ${process.env.PORT}!`),
);