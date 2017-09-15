import React from "react";
import InboxPageLayout from './InboxPageLayout'
import MessagesComponent from './MessagesComponent'
import ComposeFormComponent from './ComposeFormComponent'
import ToolbarComponent from './ToolbarComponent'
import preloader from '../preloader.gif'

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
  onDeselectAllMessages,
  onMarkAsReadSelectedMessages,
  onMarkAsUnreadSelectedMessages,
  onApplyLabelSelectedMessages,
  onRemoveLabelSelectedMessages,
  onDeleteSelectedMessages,
  onSubmit,
  onCancel,
  selectedMessageCount,
  starLoading,
  unstarLoading,
  toolbarLoading
}){
  return(
    <div>
      <InboxPageLayout>
        <ToolbarComponent
          messages={messages}
          selectedMessageCount={selectedMessageCount}
          onOpenComposeForm={onOpenComposeForm}
          onSelectAllMessages={onSelectAllMessages}
          onDeselectAllMessages={onDeselectAllMessages}
          onMarkAsReadSelectedMessages={onMarkAsReadSelectedMessages}
          onMarkAsUnreadSelectedMessages={onMarkAsUnreadSelectedMessages}
          onApplyLabelSelectedMessages={onApplyLabelSelectedMessages}
          onRemoveLabelSelectedMessages={onRemoveLabelSelectedMessages}
          onDeleteSelectedMessages={onDeleteSelectedMessages}
          toolbarLoading={toolbarLoading}

        />
        {composeOpen ?
          <ComposeFormComponent
            onSubmit={onSubmit}
            onCancel={onCancel}
        /> : null}
        {messages.length > 0 ? <MessagesComponent
          messages={messages}
          selectedMessageIds={selected}
          onMarkAsReadMessage={onMarkAsReadMessage}
          onStarMessage={onStarMessage}
          onUnstarMessage={onUnstarMessage}
          onSelectMessage={onSelectMessage}
          onDeselectMessage={onDeselectMessage}
          starLoading={starLoading}
          unstarLoading={unstarLoading}


      /> :<div style={{textAlign: "center", marginTop: '10%'}}><img alt='loader' src={preloader} style={{width: '100px'}}/> <h3>Loading...</h3></div>}
    </InboxPageLayout>
    </div>
  )
}
