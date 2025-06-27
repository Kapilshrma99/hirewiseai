import express from 'express';
import{ signUpHr,loginHr} from '../controllers/authController.js'

const router =express.Router()

router.post('/login',loginHr)
router.post('/signup',signUpHr)

export default router