import React from 'react';
import MessageComponent from './MessageComponent';


export default function MessagesComponent({messages, selectedMessageIds}){
  if (!messages) return <h5>"No Messages"</h5>;
  console.log("unread message ID's are: " + selectedMessageIds)
  return(
    <div>
      {messages.map(message => <MessageComponent message={message} key={message.id} />)}
    </div>
  )
}