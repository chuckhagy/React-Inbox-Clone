import React, { Component } from 'react';
import InboxPage from './components/InboxPage'

let messages = [
  {
    "id": 1,
    "subject": "Free Trial! MeetChuck.com This week only!",
    "read": false,
    "starred": true,
    "labels": ["gschool", "personal"],
    "body": `Act now and you can take advantage of the opportunity of a lifetime! Chuck is in your town this weekend and the free trials are going fast. So get clicking! And remember, this free trial had a required non-refundable deposit of $75, to be renewed automatically every month (and again on Chuck's birthday) for a 36 month committment.`
  },
  {
    "id": 2,
    "subject": "connecting the system won't do anything, we need to input the mobile AI panel!",
    "read": false,
    "starred": false,
    "labels": [],
    "body": `<div>example body text</div>`
  },
  {
    "id": 3,
    "subject": "Use the 1080p HTTP feed, then you can parse the cross-platform hard drive!",
    "read": false,
    "starred": true,
    "labels": ["dev"],
    "body": 'example body text'
  },
  {
    "id": 4,
    "subject": "We need to program the primary TCP hard drive!",
    "read": true,
    "starred": false,
    "labels": [],
    "body": 'example body text'
  },
  {
    "id": 5,
    "subject": "If we override the interface, we can get to the HTTP feed through the virtual EXE interface!",
    "read": false,
    "starred": false,
    "labels": ["personal"],
    "body": 'example body text'
  },
  {
    "id": 6,
    "subject": "We need to back up the wireless GB driver!",
    "read": true,
    "starred": true,
    "labels": [],
    "body": 'example body text'
  },
  {
    "id": 7,
    "subject": "We need to index the mobile PCI bus!",
    "read": true,
    "starred": false,
    "labels": ["dev", "personal"],
    "body": 'example body text'
  },
  {
    "id": 8,
    "subject": "If we connect the sensor, we can get to the HDD port through the redundant IB firewall!",
    "read": true,
    "starred": true,
    "labels": [],
    "body": 'example body text'

  }
]

export default class App extends Component {
  state={
    messages: messages,
    selected: [],
    composeOpen: 0,
    selectedMessageCount: 0
  }

  render() {
    return (
      <InboxPage
        messages={this.state.messages}
        selected={this.state.selected}
        composeOpen={this.state.composeOpen}
        selectedMessageCount={this.state.selectedMessageCount}
        onMarkAsReadMessage={this.onMarkAsReadMessage}
        onStarMessage={this.onStarMessage}
        onUnstarMessage={this.onUnstarMessage}
        onSelectMessage={this.onSelectMessage}
        onDeselectMessage={this.onDeselectMessage}
        onOpenComposeForm={this.onOpenComposeForm}
        onSelectAllMessages={this.onSelectAllMessages}
        onDeselectAllMessages={this.onDeselectAllMessages}
        onMarkAsReadSelectedMessages={this.onMarkAsReadSelectedMessages}
        onMarkAsUnreadSelectedMessages={this.onMarkAsUnreadSelectedMessages}
        onApplyLabelSelectedMessages={this.onApplyLabelSelectedMessages}
        onRemoveLabelSelectedMessages={this.onRemoveLabelSelectedMessages}
        onDeleteSelectedMessages={this.onDeleteSelectedMessages}
        onSubmit={this.onSubmit}
        onCancel={this.onCancel}
      />
    )
  }
  _onMarkAsReadMessage = messageId =>{
    this.setState(prevState => {
      let newMessages = prevState.messages.slice(0);
      newMessages.find(thisMessage => thisMessage.id === messageId ? thisMessage.read: true : null)
      return {
        messages: newMessages
      }
    });
  }

  _onUnstarMessage = messageId =>{
    this.setState(prevState => {
      let newMessages = prevState.messages.slice(0);
      newMessages.find(thisMessage => thisMessage.id === messageId ? thisMessage.starred: false : null)
      return{
        messages: newMessages
      }
    });
  }

  _onStarMessage = messageId =>{
    this.setState(prevState => {
      let newMessages = prevState.messages.slice(0);
      newMessages.find(thisMessage => thisMessage.id === messageId ? thisMessage.starred = true : null)
      return{
        messages: newMessages
      }
    })
  }

  _onSelectMessage = messageId =>{
    this.setState(prevState =>{
      let newSelected = prevState.selected.slice(0);
      newSelected.push(messageId)
      return{
        selected: newSelected,
        selectedMessageCount: newSelected.length
      }
    })
  }

  _onDeselectMessage = messageId =>{
    this.setState(prevState =>{
      let newSelected = prevState.selected.slice(0);
      let cutIndex = newSelected.indexOf(messageId);
      newSelected.splice(cutIndex, 1);
      return{
        selected: newSelected,
        selectedMessageCount: newSelected.length
      }
    })
  }

  _onOpenComposeForm = () =>{
    this.setState(prevState =>{
      let newComposeOpen = 1;
      return{
        composeOpen: newComposeOpen
      }
    })
  }

  _onSelectAllMessages = () =>{
    this.setState(prevState => {
      let newSelected = prevState.messages.map(message => message.id)
      return{
        selected: newSelected,
        selectedMessageCount: newSelected.length
      }
    })
  }

  _onDeselectAllMessages = () =>{
    this.setState(prevState => {
      let newSelected = [];
      return{
        selected: newSelected,
        selectedMessageCount: newSelected.length
      }
    })
  }

  _onMarkAsReadSelectedMessages = () =>{
    if(this.selected.length > 0){
    this.setState(prevState => {
      let newMessages = prevState.messages;
      let toChange = newMessages.filter(message => prevState.selected.includes(message.id))
      toChange.forEach(message => message.read = true)
      return{
        messages: newMessages
      }
    })
  }

  _onMarkAsUnreadSelectedMessages = () =>{
    if(this.selected.length > 0){
    this.setState(prevState => {
      let newMessages = prevState.messages;
      let toChange = newMessages.filter(message => prevState.selected.includes(message.id))
      toChange.forEach(message => message.read = false)
      return{
        messages: newMessages
      }
    })
  }

  _onApplyLabelSelectedMessages = label =>{
    if(this.selected.length > 0){
      let toChange = messages.filter(message => selected.includes(message.id))
      toChange.forEach(message =>{
        if(!message.labels.includes(label))message.labels.push(label)
      });
    }
  }

  _onRemoveLabelSelectedMessages = label =>{
    if(this.selected.length > 0){
      let toChange = this.messages.filter(message => this.selected.includes(message.id));
      toChange = this.messages.filter(message => message.labels.includes(label));
      toChange.forEach(message => {
        let cutIndex = message.labels.indexOf(label)
        message.labels.splice(cutIndex, 1);
      })
     }
  }

  _onDeleteSelectedMessages = () =>{
    if(this.selected.length > 0){
      let newMessages = this.messages.filter(message => !this.selected.includes(message.id))
      this.setState({messages: newMessages})
    }
  }


  _onSubmit = (subject, body) =>{
    let newMessage = {
      "id": 0,
      "subject": "str",
      "read": false,
      "starred": false,
      "labels": [],
      "body": ''
    }
    newMessage.id = messages[messages.length - 1].id + 1
    newMessage.subject = subject;
    newMessage.body = body;
    let newMessages = this.messages.push(newMessage)
    this.setState({messages: newMessages})
    this.setState({composeOpen: 0});
  }

  _onCancel = () =>{
    this.setState({composeOpen: 0});
  }


}
