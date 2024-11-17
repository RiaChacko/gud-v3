import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import cors from "cors";
import path from "path";
import signUpRoute from "../api/routes/signup.js";
import { fileURLToPath } from "url"; // For ES Module compatibility

dotenv.config();

// Ensure MongoDB connection string is set in the environment variables
if (!process.env.MONGO) {
  console.error("MongoDB connection string (MONGO) not defined in .env file");
  process.exit(1);  // Exit if no MongoDB connection string
}

// MongoDB connection
mongoose.connect(process.env.MONGO)
  .then(() => {
    console.log("Connected to MongoDB!");
  })
  .catch((err) => {
    console.log("MongoDB connection error:", err);
    process.exit(1);  // Exit if there's a connection error
  });

const app = express();
const port = process.env.PORT || 4000;

// Use bodyParser middleware to parse JSON data
app.use(bodyParser.json());
app.use(cors());

// Serve the API routes
app.use('/api/signup', signUpRoute);

// Handle serving static files for the frontend (SPA)
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use(express.static(path.join(__dirname, '../gud-website/dist')));

// Serve the index.html for any other routes (SPA routing)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../gud-website/dist', 'index.html'));
});

// Start the server
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
