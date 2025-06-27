import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import jobRoutes from './routes/jobRoutes.js';
import formRoutes from './routes/formRoutes.js';
import testRoutes from "./routes/testRoutes.js";
import hrRoutes from './routes/hrRoutes.js';
import authRoutes from './routes/authRoutes.js'
import generationRoutes from './routes/generationRoutes.js'
// import generate from './routes/generate.js'
// import generateDescriptionOnly from ""
dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// Import your routes here later
app.use('/api/description', generationRoutes);//new

app.use('/api/job', jobRoutes);
app.use('/api/form',formRoutes)
app.use('/api/test',testRoutes)
app.use('/api/hr', hrRoutes);
app.use('/api/auth',authRoutes);

// Sample route
app.get('/', (req, res) => {
  res.send('HireWise AI Backend Running 🚀');
});



export default app;
