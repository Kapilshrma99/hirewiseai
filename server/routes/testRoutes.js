import express from "express";
import { getTestByJobId, submitTest} from "../controllers/testController.js"

const router=express.Router();

// console.log("shdf")
router.get('/:jobId', getTestByJobId);
router.post('/submit', submitTest);

export default router;