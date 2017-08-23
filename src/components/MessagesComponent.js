import React from 'react';
import MessageComponent from './MessageComponent';


export default function MessagesComponent({messages}){
  if (!messages) return <h5>"No Messages"</h5>;
  return(
    <div>
      {messages.map(message => <MessageComponent message={message} key={message.id} />)}
    </div>
  )
}