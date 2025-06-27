import express from 'express';
import { submitApplication } from '../controllers/formController.js';

const router = express.Router();

router.post('/apply/:jobId', submitApplication); // POST /api/form/:jobId

export default router;
