import React from 'react';
import MessageComponent from './MessageComponent';


export default function MessagesComponent({
  messages,
  selectedMessageIds,
  onMarkAsReadMessage,
  onStarMessage,
  onUnstarMessage,
  onSelectMessage,
  onDeselectMessage,
  starLoading,
  unstarLoading
}){
  if (!messages) return <h5>"No Messages"</h5>;
  return(
    <div>
      {messages.map(message =>
        <MessageComponent
          message={message}
          key={message.id}
          selected={selectedMessageIds.includes(message.id)}
          onMarkAsReadMessage={onMarkAsReadMessage}
          onStarMessage={onStarMessage}
          onUnstarMessage={onUnstarMessage}
          onSelectMessage={onSelectMessage}
          onDeselectMessage={onDeselectMessage}
          selectedMessageIds={selectedMessageIds}
          date={message.date}
          starLoading={starLoading}
          unstarLoading={unstarLoading}


      />)}
    </div>
  )
}
