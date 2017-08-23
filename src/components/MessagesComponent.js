import React from 'react';
import MessageComponent from './MessageComponent';


export default function MessagesComponent({messages, selectedMessageIds}){
  if (!messages) return <h5>"No Messages"</h5>;
  console.log(selectedMessageIds)
  console.log("hello")
  return(
    <div>
      {messages.map(message => <MessageComponent message={message} key={message.id} />)}
    </div>
  )
}