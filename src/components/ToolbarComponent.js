import React from 'react';

export default function ToolbarComponent({
  messages,
  selectedMessageIds,
  onOpenComposeForm,
  onSelectAllMessages,
  onDeselectAllMessages,
  onMarkAsReadSelectedMessages,
  onMarkAsUnreadSelectedMessages,
  onApplyLabelSelectedMessages,
  onRemoveLabelSelectedMessages
}){

  let unreadMessages = messages.filter(message => !message.read)
  let numberUnread = unreadMessages.length;

  let disabled = '';
  if (selectedMessageIds.length > 0) {
    disabled = '';
  } else {
    disabled = 'disabled';
  }

  let checkerClass = '';
  if (messages.length === selectedMessageIds.length) {
    checkerClass = 'fa fa-check-square-o';
  } else {
    checkerClass = 'fa fa-minus-square-o';
  }

  function handleOnOpenComposeForm(){
    onOpenComposeForm();
  }
  function handleOnSelectAll(){
    if (selectedMessageIds.length !== messages.length) onSelectAllMessages();
    else onDeselectAllMessages();
  }
  function handleAllRead(){
    if (selectedMessageIds.length > 0) onMarkAsReadSelectedMessages();
  }
  function handleAllNotRead(){
    if (selectedMessageIds.length > 0) onMarkAsUnreadSelectedMessages();
  }
  function handleAllApplyLabel(event){
    if (selectedMessageIds.length > 0) onApplyLabelSelectedMessages(event.target.value);
  }
  function handleAllRemoveLabel(event){
    if (selectedMessageIds.length > 0) onRemoveLabelSelectedMessages(event.target.value);
  }

  return(
    <div className="row toolbar">
  <div className="col-md-12">
    <p className="pull-right">
      <span className="badge badge">{numberUnread}</span>
      unread messages
    </p>
    <a className="btn btn-danger" onClick={handleOnOpenComposeForm}>
      <i className="fa fa-plus"></i>
    </a>
    <button className="btn btn-default" onClick={handleOnSelectAll}>
      <i className={`${checkerClass}`}></i>
    </button>

    <button className="btn btn-default" disabled={`${disabled}`} onClick={handleAllRead}>
      Mark As Read
    </button>

    <button className="btn btn-default" disabled={`${disabled}`} onClick={handleAllNotRead}>
      Mark As Unread
    </button>

    <select className="form-control label-select" disabled={`${disabled}`} onChange={handleAllApplyLabel}>
      <option>Apply label</option>
      <option value="dev">dev</option>
      <option value="personal">personal</option>
      <option value="gschool">gschool</option>
    </select>

    <select className="form-control label-select" disabled={`${disabled}`} onChange={handleAllRemoveLabel}>
      <option>Remove label</option>
      <option value="dev">dev</option>
      <option value="personal">personal</option>
      <option value="gschool">gschool</option>
    </select>

    <button className="btn btn-default" disabled={`${disabled}`}>
      <i className="fa fa-trash-o"></i>
    </button>
  </div>
</div>
  )
}
