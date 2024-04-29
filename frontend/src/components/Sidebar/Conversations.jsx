import React from 'react';
import Conversation from './Conversation.jsx';
import useGetConvos from '../../hooks/useGetConvos.js';

const Conversations = () => {
  const { loading, conversations } = useGetConvos();

  // Ensure conversations and filteredUsers are initialized
  const convos = conversations && conversations.filteredUsers;
  return (
    <div className='py-2 flex flex-col overflow-auto'>
      {/* Check if convos is defined before using map */}
      {convos && convos.map((conversation, idx) => (
        <Conversation
          key={conversation._id}
          conversation={conversation}
          lastidx={idx === conversations.length - 1}
        />
      ))}
    </div>
  );
};

export default Conversations;
