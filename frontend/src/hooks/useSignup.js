import React, { useState } from 'react'
import toast from "react-hot-toast"
import { useAuthContext } from '../context/AuthContext';


const useSignup = () => {
  const[loading,setloading]=useState(false);
  const{authuser,setauthuser}=useAuthContext();

  const signup=async ({fullName,username,password,confirmPassword,gender})=>{
   const success=handelInputError({fullName,username,password,confirmPassword,gender})

   if(!success) return ;

  try{

  const res=await fetch("/api/auth/signup",{
    method:"POST",
    headers:{"Content-Type":"application/json"},
    body: JSON.stringify({fullName,username,password,confirmPassword,gender})
  })

   const data=await res.json();
   if(data.error){
    throw new Error(data.error);
   }

   //setuser to local storage and update context
   localStorage.setItem("chat-user",JSON.stringify(data));
   
   setauthuser(data);

  }catch(err){
    toast.error(err.message);
  } finally {
    setloading(false);
  }

  }

  return {loading,signup};
}

export default useSignup



function handelInputError({fullName,username,password,confirmPassword,gender}){
    if(!fullName||!username||!password||!confirmPassword||!gender){
      toast.error("please fill all the fields");
      return false;
    }

    if(password!=confirmPassword){
      toast.error("passwords do not match");
      return false;
    }

    if(password.legnth<6){
      toast.error("passwords is less strong")
      return false;
    }
    return true;
}
