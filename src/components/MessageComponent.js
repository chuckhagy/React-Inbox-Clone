import React from 'react';
import preloader from '../preloader.gif'
let moment = require('moment');

export default class MessageComponent extends React.Component{
  state = {
    bodyVisibile: false,
  }

  handleReadClick = event => {
    event.preventDefault();
    if(!this.state.bodyVisible) this.setState({bodyVisible: true})
    if(this.state.bodyVisible) this.setState({bodyVisible: false})
    this.props.onMarkAsReadMessage(this.props.message.id);
  }

    handleStarClick = event => {
    event.preventDefault();
    if(this.props.message.starred) this.props.onUnstarMessage(this.props.message.id);
    else this.props.onStarMessage(this.props.message.id);
  }

    handleSelectClick = event => {
    if(this.props.selected) this.props.onDeselectMessage(this.props.message.id);
    else this.props.onSelectMessage(this.props.message.id);
  }

  render(){
    if (!this.props.message) return <h5>"No Matches"</h5>;

    let readClass = '';
    if (!this.props.message.read) {
      readClass = 'unread';
    } else {
      readClass = 'read';
    }

    let starClass = '';
    if (this.props.message.starred) {
      starClass = 'fa-star';
    } else {
      starClass = 'fa-star-o';
    }

    let selectedClass = '';
    if (this.props.selected) {
      selectedClass = 'selected';
    } else {
      selectedClass = '';
    }
    
    let fullDate = this.props.date;
    let diff = new Date(fullDate) - Date.now();
    let date = null;
    if (fullDate){
      if(diff < -86400000){
        date = moment(fullDate).format("MMM Do, YYYY")
      }
      else if(diff < -3600000){
        date = moment(fullDate).format("h:mm a")
      } else{
        date = moment(fullDate).fromNow()
      }
    }

  return (
    <div>

    <div className={`row message ${readClass} ${selectedClass}`}>

      <div className="col-xs-1">
        <div className="row">
          <div className="col-xs-2">
            <input type="checkbox"  checked={!!this.props.selected} onClick={this.handleSelectClick}/>
          </div>
          <div className="col-xs-2">
            {this.props.starLoading === this.props.message.id || this.props.unstarLoading === this.props.message.id ? <img alt='loader' src={preloader} style={{width: '16px'}}/> : <i className={`star fa ${starClass}`} onClick={this.handleStarClick} />}
          </div>
        </div>
      </div>
      <div className="col-xs-11" onClick={this.handleReadClick} >
        {this.props.message.labels.map((label, index) => <span className="label label-warning" key={index}>{label}</span>)}
        <a href="." >
          {this.props.message.subject}
        </a>
        <span style={{position: "absolute", right: 15}}>{date}</span>
      </div>
    </div>
    {this.state.bodyVisible ? <div className="message-body">{this.props.message.body}</div> : null}
  </div>
  )};
}
