import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import cors from "cors";
import signUpRoute from "../api/routes/signup.js";

dotenv.config();


mongoose.connect(process.env.MONGO).then(()=>{
    console.log("Connected to MongoDB!");
}).catch((err)=>{
    console.log(err);
})

const app = express();
const port = process.env.PORT || 4000;
app.use(bodyParser.json());
app.use(cors({
  origin: 'https://gud-v3-front.onrender.com',  // Frontend URL
}));


app.use('/api/signup', signUpRoute);

app.listen(port, ()=>{
    console.log("Server is listening on port 3000");
})
