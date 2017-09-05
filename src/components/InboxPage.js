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
  onDeselectAllMessages,
  onMarkAsReadSelectedMessages,
  onMarkAsUnreadSelectedMessages,
  onApplyLabelSelectedMessages,
  onRemoveLabelSelectedMessages,
  onDeleteSelectedMessages,
  onSubmit,
  onCancel,
  selectedMessageCount,
  loaded,
  starLoading,
  unstarLoading
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

        />
        {composeOpen ?
          <ComposeFormComponent
            onSubmit={onSubmit}
            onCancel={onCancel}
        /> : null}
        {loaded ? <MessagesComponent
          messages={messages}
          selectedMessageIds={selected}
          onMarkAsReadMessage={onMarkAsReadMessage}
          onStarMessage={onStarMessage}
          onUnstarMessage={onUnstarMessage}
          onSelectMessage={onSelectMessage}
          onDeselectMessage={onDeselectMessage}
          starLoading={starLoading}
          unstarLoading={unstarLoading}


      /> : <h3 style={{textAlign: "center", marginTop: '10%'}}>Loading...</h3>}
    </InboxPageLayout>
    </div>
  )
}
