import {Server} from "socket.io";
import http from "http"
import express from "express";

const app=express();

const server=http.createServer(app);
const io=new Server(server,{
    cors:{
        origin:["http://localhost:5173"],
        methods:["GET","POST"],
    },
});

export const getRecieverSocketId=(receiverId)=>{
    return userSocketMap[receiverId];
}

const userSocketMap={};

io.on("connection",(socket)=>{
    console.log("a user connected",socket.id)
   const userId=socket.handshake.query.userId;

   if(userId!="undefined") userSocketMap[userId]=socket.id;
 
   io.emit("getonlineusers",Object.keys(userSocketMap))

    socket.on("disconnect",()=>{
        console.log("disconnected",socket.id)
        delete userSocketMap[userId];
        io.emit("getonlineusers",Object.keys(userSocketMap))
    })
})


export {app,io,server};