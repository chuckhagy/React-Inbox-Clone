import React from "react";
import InboxPageLayout from './InboxPageLayout'
import MessagesComponent from './MessagesComponent'
import ComposeFormComponent from './ComposeFormComponent'
import ToolbarComponent from './ToolbarComponent'

export default function InboxPage({messages, selected}){
  return(
    <div>
      <InboxPageLayout>
        <ToolbarComponent
          messages={messages}
          selectedMessageIds={selected}
        />
        <ComposeFormComponent />
        <MessagesComponent
          messages={messages}
          selectedMessageIds={selected}
      />
    </InboxPageLayout>
    </div>
  )
}
