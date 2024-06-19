import { Router } from 'express'
import { registrationService } from '../services/registration.js'
import { loginService } from '../services/login.js'
import { getUserService } from '../services/user.js'
import { authentificationMiddleware } from '../middleware/authentification.js'

const userRouter = Router()

userRouter.get('/user', authentificationMiddleware, getUserService)

export default userRouter