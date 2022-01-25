import { Router } from 'express'
import v1 from './v1'

export const router = Router()

router.use('/v1', v1)

router.get("/", (_, res) => {
    res.status(200)
        .send('wilkommen auf api')
})

router.get("/health", (_, res) => {

});

router.use((_, res) => {
    res.status(404)
})