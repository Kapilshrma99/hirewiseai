import { generateJobDescription } from '../services/openaiService.js';
import verifyToken from '../middleware/verifyToken.js';
import express from 'express'
const router =express.Router()
router.post('/', verifyToken, generateJobDescription);
export default router