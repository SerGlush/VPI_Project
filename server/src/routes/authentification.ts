import { Router } from 'express'
import { registrationService } from '../services/registration.js'
import { loginService } from '../services/login.js'

const authentificationRouter = Router()

authentificationRouter.post('/register', registrationService)
authentificationRouter.post('/login', loginService)

export default authentificationRouter
