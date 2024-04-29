import React, { useState } from 'react'
import { IoSearchSharp } from "react-icons/io5";
import useConversation from '../../zustand/useConversation';
import useGetConvos from '../../hooks/useGetConvos';
import toast from 'react-hot-toast';

const SearchInp = () => {

  const[search,setsearch]=useState("");
  const{setselectedconversation}=useConversation()
  const {conversations}=useGetConvos();
  const convos=conversations.filteredUsers;

const handleSubmit=(e)=>{
   e.preventDefault();
   if(!search) return;
   const conversation= convos.find((c)=>c.fullName.toLowerCase().includes(search.toLowerCase()));

   if(conversation){
    setselectedconversation(conversation);
    setsearch("");
   }
   else{
    toast.error("npo user found")
   }
}

  return (
    <div>
      <form className='flex items-center gap-2' onSubmit={handleSubmit}>
<input type="text" placeholder="Search..." className="input input-bordered rounded-full"
value={search}
onChange={e=>setsearch(e.target.value)}
></input>
<IoSearchSharp className='w-6 h-6 outline-none'></IoSearchSharp>
      </form>
    </div>
  )
}

export default SearchInp
