import React from 'react';

export default function ToolbarComponent({
  messages,
  selectedMessageIds,
  onOpenComposeForm,
  onSelectAllMessages,
  onDeselectAllMessages
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

    <button className="btn btn-default" disabled={`${disabled}`}>
      Mark As Read
    </button>

    <button className="btn btn-default" disabled={`${disabled}`}>
      Mark As Unread
    </button>

    <select className="form-control label-select" disabled={`${disabled}`}>
      <option>Apply label</option>
      <option value="dev">dev</option>
      <option value="personal">personal</option>
      <option value="gschool">gschool</option>
    </select>

    <select className="form-control label-select" disabled={`${disabled}`}>
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
