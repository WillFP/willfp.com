import { Router } from 'express'
import { getRepos } from './getRepos'

const router = Router()

router.get('/getRepos', getRepos)

router.get("/", (_, res) => {
    res.status(200)
        .send('grats on getting here')
})

export default router;