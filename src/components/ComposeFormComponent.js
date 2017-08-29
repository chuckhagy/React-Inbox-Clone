import React from 'react';

export default function ComposeFormComponent({ onSubmit, onCancel }){

  function handleSubmit(event){
    event.preventDefault();
    let subject = event.target.subject.value.trim()
    let body = event.target.body.value.trim()
    onSubmit(subject, body);
  }

  function handleClickCancel(event){
    event.preventDefault();
    onCancel();
  }

  return(
    <form className="form-horizontal well" onSubmit={handleSubmit}>
      <div className="form-group">
        <div className="col-sm-8 col-sm-offset-2">
          <h4>Compose Message</h4>
        </div>
      </div>
      <div className="form-group">
        <label htmlFor="subject" className="col-sm-2 control-label">Subject</label>
        <div className="col-sm-8">
          <input type="text" className="form-control" id="subject" placeholder="Enter a subject" name="subject"></input>
        </div>
      </div>
      <div className="form-group">
        <label htmlFor="body" className="col-sm-2 control-label">Body</label>
        <div className="col-sm-8">
          <textarea name="body" id="body" className="form-control"></textarea>
        </div>
      </div>
      <div className="form-group">
        <div className="col s3 col-sm-offset-2">
          <input type="submit" value="Send" className="btn btn-primary"></input>
          <input
            type="reset"
            value="Cancel"
            className="btn btn-default"
            onClick={handleClickCancel}
          />        </div>

      </div>
    </form>
  )
}
