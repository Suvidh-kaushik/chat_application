import React, { useEffect } from 'react'
import Messages from './Messages'
import MessageInp from './MessageInp'
import useConversation from '../../zustand/useConversation'

const MessageContainer = () => {

  const {selectedconversation,setselectedconversation}=useConversation();

  useEffect(()=>{


    //unmounting
    return ()=>{
      setselectedconversation(null)
    }
  },[setselectedconversation])

  return (
    <div className='md:min-w-[450px] flex flex-col'>
       <>
    {!selectedconversation?<Nochatselected/>:(<><div className='bg-slate-500 px-4 py-2 mb-2'>
        <span className='label-text'>To:</span>
        <span className='text-black font-bold'>{selectedconversation.fullName}</span>
    </div>
<Messages/>
<MessageInp/>
</>)
}
       </> 
      
    </div>
  )
}

export default MessageContainer


const Nochatselected=()=>{
  return(
    <div className='flex items-center justify-center w-full h-full'>
      <div className='px-4 text-center sm:text-lg md:text-xl text-gray-200 font-semibold flex flex-col items-center gap-2'>
        <p>Select a chat to start messaging</p>
      </div>
    </div>
  )
}