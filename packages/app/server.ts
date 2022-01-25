import express from "express";
import { router } from './routes/routes'
require('dotenv').config()

const PORT = process.env.PORT

const app = express();

app.set("trust proxy", 1)

app.use('/', router)

const server = app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
})

server.on('error', (err) => {
    console.error('server error: ', err.message)
})