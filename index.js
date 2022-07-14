import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import authRoute from "./routes/auth.js";
import usersRoute from "./routes/users.js";
import hotelsRoute from "./routes/hotels.js";
import roomsRoute from "./routes/rooms.js";
import cookieParser from "cookie-parser";
import cors from "cors";

const app = express();
dotenv.config();

const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO);
        console.log("App is connected with mongoDB.");
      } catch (error) {
        throw error
      }
};

//Cookie Parser middleware
app.use(cookieParser());
//Express middleware
app.use(express.json());
//Cors Middleware
app.use(cors());

//routes
app.use("/api/auth", authRoute);
app.use("/api/users", usersRoute);
app.use("/api/hotels", hotelsRoute);
app.use("/api/rooms", roomsRoute);

//Error Handaling middleware
app.use((error, request, response, next) => {
  const errorStatus = error.status || 500;
  const errorMessage = error.message || "Some thing went wrong!";
  return response.status(errorStatus).json({success:false, status: errorStatus, message: errorMessage, stack: error.stack});
});

app.listen(5000, () => {
    connect();
    console.log("server is running");
});