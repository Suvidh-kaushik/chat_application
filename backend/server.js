import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import path from "path";


import authroutes from "./routes/authroutes.js"
import messageRoutes from "./routes/messageRoutes.js"
import userRoutes from "./routes/userRoutes.js"


import connectToMongodb from "./db/connectToMongodb.js";
import { app, server } from "./socket/socket.js";

const _dirname=path.resolve();

dotenv.config();

app.use(cookieParser());
const PORT=process.env.PORT||3000;


app.use("/api/auth",authroutes);
app.use("/api/messages",messageRoutes)
app.use("/api/users",userRoutes);
app.use(express.json());

app.use(express.static(path.join(_dirname,"/frontend/dist")));

app.get("*",(req,res)=>{
    res.sendFile(path.join(_dirname,"frontend","dist","index.html"));
});


server.listen(PORT,()=>{
    connectToMongodb()
    console.log(`server running on port ${PORT}`)
})