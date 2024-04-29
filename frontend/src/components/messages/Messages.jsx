import React, { useEffect, useRef } from 'react'
import Message from './Message.jsx'
import useGetMessages from '../../hooks/useGetMessages.js'
import useListenMessages from '../../hooks/useListenMessages.js';

const Messages = () => {

  const{messages,loading}=useGetMessages();
 useListenMessages();
  return (
    <div className='px-4 flex-1 overflow-auto'>
    {messages.map((message)=>{
     return <Message key={message._id}
      message={message}/>
    })}
    </div>
  )
}

export default Messages
