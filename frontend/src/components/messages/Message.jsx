import React from 'react'
import { useAuthContext } from '../../context/AuthContext'
import useConversation from '../../zustand/useConversation';
import { extractTime } from '../../utils/extreactTime';

const Message = ({message}) => {

  const{authuser}=useAuthContext();
  const timenow=extractTime(message.createdAt)
  const{selectedconversation}=useConversation();
  const fromMe = message.senderId===authuser._id;
  const chatclassName=fromMe?'chat-end':'chat-start';
  const profilePic=fromMe?authuser.profilePic:selectedconversation?.profilePic;
  const bubblebgcolor=fromMe?'bg-black':"";

  return (
    <>
    <div className={`chat ${chatclassName}`}>
        <div className='chat-image avatr'>
            <div className='w-10 rounded-full'>
                <img src={profilePic}/>
            </div>
        </div>
        <div className={`chat-bubble text-white ${bubblebgcolor}`}>{message.message}</div>
      <div className='chat-footer text-xs flex gap-1 items-center'>{timenow}</div>
    </div>
  </>
  )
}

export default Message
