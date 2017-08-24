import React from 'react';
export default function MessageComponent({ message, selected }) {
  if (!message) return <h5>"No Matches"</h5>;
  
  let readClass = '';
  if (message.read === false) {
    readClass = 'unread';
  } else {
    readClass = 'read';
  }
  
  let starClass = '';
  if (message.starred === true) {
    starClass = 'fa-star';
  } else {
    starClass = 'fa-star-o';
  }
  
  let selectedClass = '';
  let checkedStat = '';
  if (selected === true) {
    selectedClass = 'selected';
    checkedStat = 'checked';
  } else {
    selectedClass = '';
    checkedStat = '';
  }
  
  return (
    <div className={`row message ${readClass} ${selectedClass}`}>
      <div className="col-xs-1">
        <div className="row">
          <div className="col-xs-2">
            <input type="checkbox" checked={checkedStat} />
          </div>
          <div className="col-xs-2">
            <i className={`star fa ${starClass}`} />
          </div>
        </div>
      </div>
      <div className="col-xs-11">
        {message.labels.map((label, index) => <span className="label label-warning" key={index}>{label}</span>)}
        <a href="#">
          {message.subject}
        </a>
      </div>
    </div>
  );
}
