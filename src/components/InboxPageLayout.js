import React from 'react';

export default function InboxPageLayout(props) {
  return(
    <div>
    <div className="boqzheader">inB<span className="titleBox"></span>QZ</div>
      <div className="chuckMain">
        <div>{props.children[0]}</div>
        <div>{props.children[1]}</div>
        <div>{props.children[2]}</div>
      </div>
      <div className="boqzfooter">think inside the boqz</div>
    </div>
  )
}
