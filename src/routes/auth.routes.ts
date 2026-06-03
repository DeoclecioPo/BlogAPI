import { Router } from 'express'
import * as authController from '../controllers/auth.controllers'

export const authRoutes = Router()

authRoutes.post('/signup', authController.signIn)
authRoutes.post('/signup', authController.signUp)
authRoutes.post('/validate', authController.validate)