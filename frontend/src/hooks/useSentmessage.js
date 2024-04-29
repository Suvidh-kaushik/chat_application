import { useState } from "react";
import useConversation from "../zustand/useConversation";
import toast from "react-hot-toast";


const useSentmessage = () => {

    const[loading,setloading]=useState(false);

    const{messages,setmessages,selectedconversation} = useConversation();

    const sendmessage=async(message)=>{
        setloading(true);
        try{
            const res=await fetch(`/api/messages/send/${selectedconversation._id}`,{
                method:"POST",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify({message})
            })
    const data=await res.json();

    if(data.error){
        throw new Error(data.error);
    }

    setmessages([...messages,data]);

        }catch(error){
            toast.error(error.message);
        }
    }
return{loading,sendmessage};

}

export default useSentmessage
