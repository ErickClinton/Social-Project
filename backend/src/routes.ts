import { Router } from 'express'

import { login_handler, createUser_handler } from './Controller/auth'

const router = Router()

router.post('/auth/login', login_handler)
router.post('/auth/user', createUser_handler)

export default router