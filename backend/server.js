import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import authroutes from "./routes/authroutes.js"
import messageRoutes from "./routes/messageRoutes.js"
import userRoutes from "./routes/userRoutes.js"


import connectToMongodb from "./db/connectToMongodb.js";
import { app, server } from "./socket/socket.js";

dotenv.config();

app.use(cookieParser());
const PORT=process.env.PORT||3000;


app.use("/api/auth",authroutes);
app.use("/api/messages",messageRoutes)
app.use("/api/users",userRoutes);
app.use(express.json());


server.listen(PORT,()=>{
    connectToMongodb()
    console.log(`server running on port ${PORT}`)
})