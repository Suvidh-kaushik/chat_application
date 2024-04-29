
import { useState } from "react"
import toast from "react-hot-toast"

import { useAuthContext } from "../context/AuthContext";


const useLogin=()=>{
    const[loading,setloading]=useState(false);
  const{setauthuser}=useAuthContext();

    const login=async(username,password)=>{
        setloading(true);
     
        try{

            if(!username||!password){
             return toast.error("please filll all the fields")
            }
            const res=await fetch("/api/auth/signin",{
                method:"POST",
                headers:{"Content-Type":"application/json"},
                body:JSON.stringify({username,password})
            })

            const data=await res.json();
            if(data.error){
                throw new Error(data.error);
            }


            //code above is very important

            
            localStorage.setItem("chat-user",JSON.stringify(data));
            setauthuser(data);
          
        }catch(error){
            toast.error(error.message);
        }finally{
            setloading(true);
        }
    }

    return{loading,login}

}

export default useLogin;