import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import cors from "cors";
import signUpRoute from "../api/routes/signup.js";
import path from "path";
import { fileURLToPath } from "url";

dotenv.config();


mongoose.connect(process.env.MONGO).then(()=>{
    console.log("Connected to MongoDB!");
}).catch((err)=>{
    console.log(err);
})

const app = express();
const port = process.env.PORT || 4000;
app.use(bodyParser.json());
app.use(cors());


app.use('/api/signup', signUpRoute);

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Serve static files from the frontend build directory (SPA routing)
app.use(express.static(path.join(__dirname, '../gud-website/dist')));

// Serve the index.html for all other routes (SPA routing)
// This ensures React Router or similar can handle routing
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../gud-website/dist', 'index.html'));
});


app.listen(port, ()=>{
    console.log("Server is listening on port 3000");
})
