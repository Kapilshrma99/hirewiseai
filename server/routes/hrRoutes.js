import express from "express"
import verifyToken from '../middleware/verifyToken.js';

import { getHrDashboard } from "../controllers/hrController.js"

const router=express.Router()

router.get("/jobs",verifyToken,getHrDashboard);
export default router