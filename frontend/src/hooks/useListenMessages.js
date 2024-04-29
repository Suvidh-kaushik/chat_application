import React, { useEffect } from 'react'
import { useSocketContext } from '../context/SocketContext'
import useGetConvos from './useGetConvos';
import useConversation from '../zustand/useConversation';

const useListenMessages = () => {
 const {socket}=useSocketContext();

 const{messages,setmessages}=useConversation();

 useEffect(()=>{
    socket?.on("newMessage",(newMessage)=>{
        setmessages([...messages,newMessage])
    })


    return ()=> socket?.off("newMessage")
 },[socket,setmessages,messages])
}

export default useListenMessages
