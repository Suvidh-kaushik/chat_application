import { useState } from "react";
import { useAuthContext } from "../context/AuthContext";

const useLogout=()=>{

    const{setauthuser}=useAuthContext();
    const [loading,setloading]=useState(false);
 const logout=async()=>{
    setloading(true);
    try{
        const res=await fetch("/api/auth/logout",{
            method:"POST",
            headers:{"Content-Type":"application/json"}  
        });

        const data=await res.json();
        if(data.error){
            throw new Error(data.error)
        }
        localStorage.removeItem("chat-user");
        setauthuser(null);

    }catch(err){
      toast.error(err.message);
    }finally{
        setloading(false);
    }
 }
 return {loading,logout}

}

export default useLogout;