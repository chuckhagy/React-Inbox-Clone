import React from 'react';
import preloader from '../preloader.gif'


export default function ToolbarComponent({
  messages,
  selectedMessageCount,
  selected,
  onOpenComposeForm,
  onSelectAllMessages,
  onDeselectAllMessages,
  onMarkAsReadSelectedMessages,
  onMarkAsUnreadSelectedMessages,
  onApplyLabelSelectedMessages,
  onRemoveLabelSelectedMessages,
  onDeleteSelectedMessages,
  toolbarLoading
}){

  let unreadMessages = messages.filter(message => !message.read)
  let numberUnread = unreadMessages.length;

  let disabled = '';
  if (selectedMessageCount > 0) {
    disabled = '';
  } else {
    disabled = 'disabled';
  }

  let checkerClass = '';
  if (messages.length === selectedMessageCount) {
    checkerClass = 'fa fa-check-square-o';
  } else {
    checkerClass = 'fa fa-minus-square-o';
  }


  function handleOnOpenComposeForm(){
    onOpenComposeForm();
  }
  function handleOnSelectAll(){
    if (selectedMessageCount !== messages.length) onSelectAllMessages();
    else onDeselectAllMessages();
  }
  function handleAllRead(){
    if (selectedMessageCount > 0) onMarkAsReadSelectedMessages();
  }
  function handleAllNotRead(){
    if (selectedMessageCount > 0) onMarkAsUnreadSelectedMessages();
  }
  function handleAllApplyLabel(event){
    if (selectedMessageCount > 0) onApplyLabelSelectedMessages(event.target.value);
  }
  function handleAllRemoveLabel(event){
    if (selectedMessageCount > 0) onRemoveLabelSelectedMessages(event.target.value);
  }
  function handleDeleteSelected(){
    if (selectedMessageCount > 0) onDeleteSelectedMessages();
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
      <option value="">Apply label</option>
      <option value="dev">dev</option>
      <option value="personal">personal</option>
      <option value="gschool">gschool</option>
    </select>

    <select className="form-control label-select" disabled={`${disabled}`} onChange={handleAllRemoveLabel}>
      <option value="">Remove label</option>
      <option value="dev">dev</option>
      <option value="personal">personal</option>
      <option value="gschool">gschool</option>
    </select>

    <button className="btn btn-default" disabled={`${disabled}`} onClick={handleDeleteSelected}>
      <i className="fa fa-trash-o"></i>
    </button>
    {toolbarLoading ? <img src={preloader} style={{width: '40px'}}/> : null}
  </div>
</div>
  )
}
