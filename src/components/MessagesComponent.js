import React from 'react';
import MessageComponent from './MessageComponent';


export default function MessagesComponent({messages, selectedMessageIds}){
  if (!messages) return <h5>"No Messages"</h5>;
  return(
    <div>
      {messages.map(message => <MessageComponent message={message} key={message.id} selected={selectedMessageIds.includes(message.id)}  />)}
    </div>
  )
}