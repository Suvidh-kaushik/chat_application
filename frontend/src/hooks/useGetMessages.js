import React, { useContext, useEffect, useState } from 'react'
import useConversation from '../zustand/useConversation';
import toast from 'react-hot-toast';

const useGetMessages = () => {
 const[loading,setloading]=useState();
const{messages,setmessages,selectedconversation}=useConversation();

useEffect(()=>{
    const getMessages=async()=>{
  setloading(true);
        try {
    const res=await fetch(`/api/messages/${selectedconversation._id}`)
    const data=await res.json();

    if(data.error) throw new Error(data.error)
    setmessages(data);
} catch (error) {
    toast.error(error.message)
}finally{
    setloading(false)
}
}
  if(selectedconversation?._id) getMessages();
},[selectedconversation?._id,setmessages])
return{loading,messages}
}

export default useGetMessages
