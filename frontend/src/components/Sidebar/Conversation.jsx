import React from 'react'
import useConversation from '../../zustand/useConversation'
import { useSocketContext } from '../../context/SocketContext';

const Conversation = ({conversation,lastidx}) => {

   const{selectedconversation,setselectedconversation}=useConversation();
  const{onlineUsers}=useSocketContext();
   const isSelected=selectedconversation?._id===conversation._id;
   const isOnline = onlineUsers&&onlineUsers.includes(conversation._id);
   console.log(isOnline);
   return (
    <>
    <div className={`flex gap-2 items-center hover:bg-sky-500 rounded p-2 py-1 cursor-pointer bg-slate-400
    ${isSelected?"bg-sky-700":""}`}
    onClick={()=>{setselectedconversation(conversation)}}
    >
    <div className={`avatar ${isOnline?"online":""}`}>
  <div className='w-12 rounded-full'>
    <img src={conversation.profilePic} alt="h"/>
  </div>
    </div>

    <div className='flex flex-col flex-1'>
      <div className='flex gap-3 justify-between'>
        <p className="fonr-bold text-black">{conversation.fullName}</p>
        <span className='text-xl'>😊</span>
      </div>
    </div>
    </div>
  {!lastidx &&   <div className='divider my-0 py-0 h-1'></div>}
  </>
  )

}

export default Conversation
