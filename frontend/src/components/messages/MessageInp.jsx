import React, { useState } from 'react'
 import {BsSend} from "react-icons/bs"
import useSentmessage from '../../hooks/useSentmessage';
const MessageInp = () => {

  const [message,setmessage]=useState("");
const {loading,sendmessage}=useSentmessage()
  const handleSubmit=async(e)=>{
    e.preventDefault();
    if(!message) return;
    await sendmessage(message);
    setmessage("");
  }
  return (
    <div>
        <form className='px-4 my-3' onSubmit={handleSubmit}>
            <div className='w-full relative'>
                <input type='text' className='border text-sm rounded-lg block w-full p-2.5' text-white bg-blue-600 value={message}
                onChange={e=>{setmessage(e.target.value)}} ></input>
                <button type="submit" className="absolute inset-y-0 end-0 flex items-center pe-3">
                    <BsSend/>
                    </button>
            </div>
        </form>
      
    </div>
  )
}

export default MessageInp
