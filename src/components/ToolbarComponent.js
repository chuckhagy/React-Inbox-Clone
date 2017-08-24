import React from 'react';

export default function ToolbarComponent({ config }){
  let disabled = '';
  if (config.selected.length > 0) {
    disabled = '';
  } else {
    disabled = 'disabled';
  }
  
  let checkerClass = '';
  if (config.messages.length === config.selected.length) {
    checkerClass = 'fa fa-check-square-o';
  } else {
    checkerClass = 'fa fa-minus-square-o';
  }
  
  let composeButton = '';
  let composeIcon = '';
  if(config.composeButton){
    composeButton = "btn btn-danger";
    composeIcon = "fa fa-plus";
    
  } else {
    composeButton = '';
    composeIcon = '';
  }
  
  return(
    <div className="row toolbar">
  <div className="col-md-12">
    <p className="pull-right">
      <span className="badge badge">2</span>
      unread messages
    </p>
    <a className={`${composeButton}`}>
      <i className={`${composeIcon}`}></i>
    </a>
    <button className="btn btn-default">
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