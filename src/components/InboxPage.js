import React from "react";
import InboxPageLayout from './InboxPageLayout'
import MessagesComponent from './MessagesComponent'
import ComposeFormComponent from './ComposeFormComponent'
import ToolbarComponent from './ToolbarComponent'

export default function InboxPage({
  messages,
  selected,
  onMarkAsReadMessage,
  onStarMessage,
  onUnstarMessage,
  onSelectMessage,
  onDeselectMessage,
  onOpenComposeForm,
  composeOpen,
  onSelectAllMessages,
  onDeselectAllMessages
}){
console.log(composeOpen);
  return(
    <div>
      <InboxPageLayout>
        <ToolbarComponent
          messages={messages}
          selectedMessageIds={selected}
          onOpenComposeForm={onOpenComposeForm}
          onSelectAllMessages={onSelectAllMessages}
          onDeselectAllMessages={onDeselectAllMessages}


        />
        {composeOpen && <ComposeFormComponent />}
        <MessagesComponent
          messages={messages}
          selectedMessageIds={selected}
          onMarkAsReadMessage={onMarkAsReadMessage}
          onStarMessage={onStarMessage}
          onUnstarMessage={onUnstarMessage}
          onSelectMessage={onSelectMessage}
          onDeselectMessage={onDeselectMessage}
      />
    </InboxPageLayout>
    </div>
  )
}
