import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import jobRoutes from './routes/job.js';
import { connectToDatabase } from './db/connection.js';


dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;
const IP = process.env.IP || 'localhost';

const corsOptions = {
  origin: `http://${IP}:3000`, // Replace with your frontend's URL
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allowed HTTP methods
  allowedHeaders: ['Content-Type'], // Allowed headers
};

app.use(cors(corsOptions));
app.use(express.json());
app.use("/api/jobs", jobRoutes)

connectToDatabase();

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
}
);