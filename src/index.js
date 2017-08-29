import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import InboxPage from './components/InboxPage'

let messages = [
{
"id": 1,
"subject": "Free Trial! MeetChuck.com This week only!",
"read": false,
"starred": true,
"labels": ["gschool", "personal"],
"body": 'example body text'
},
{
"id": 2,
"subject": "connecting the system won't do anything, we need to input the mobile AI panel!",
"read": false,
"starred": false,
"labels": [],
"body": 'example body text'
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
let composeOpen=0;
let selected = [1, 2, 3];

function onMarkAsReadMessage(messageId){
  let thisTarget = messages.find(thisMessage => thisMessage.id === messageId)
  thisTarget.read = true;
  render();
}

function onUnstarMessage(messageId){
  let thisTarget = messages.find(thisMessage => thisMessage.id === messageId)
  thisTarget.starred = false;
  render();
}

function onStarMessage(messageId){
  let thisTarget = messages.find(thisMessage => thisMessage.id === messageId)
  thisTarget.starred = true;
  render();
}

function onSelectMessage(messageId){
  selected.push(messageId);
  render();
}
function onDeselectMessage(messageId){
  let cutIndex = selected.indexOf(messageId);
  selected.splice(cutIndex, 1);
  render();
}
function onOpenComposeForm(){
  composeOpen = 1;
  render();
}
function onSelectAllMessages(){
 selected = messages.map(message => message.id);
 render();
}
function onDeselectAllMessages(){
 selected = [];
 render();
}
function onMarkAsReadSelectedMessages(){
  if(selected.length > 0){
    let toChange = messages.filter(message => selected.includes(message.id))
    toChange.forEach(message => message.read = true);
  }
  render()
}
function onMarkAsUnreadSelectedMessages(){
  if(selected.length > 0){
    let toChange = messages.filter(message => selected.includes(message.id))
    toChange.forEach(message => message.read = false);
  }
  render()
}

function onApplyLabelSelectedMessages(label){
  if(selected.length > 0){
    let toChange = messages.filter(message => selected.includes(message.id))
    toChange.forEach(message => message.labels.push(label));
  }
  render()
}

function onRemoveLabelSelectedMessages(label){
  if(selected.length > 0){
    let toChange = messages.filter(message => selected.includes(message.id));
    toChange = messages.filter(message => message.labels.includes(label));
    toChange.forEach(message => {
      let cutIndex = message.labels.indexOf(label)
      console.log(cutIndex);
      message.labels.splice(cutIndex, 1);
    })
   }
  render()
}

function onDeleteSelectedMessages(){
  if(selected.length > 0){
    let toDelete = [];
    messages.forEach((message, index) => {
      if(selected.includes(message.id)) toDelete.push(index);
    })
    toDelete = toDelete.sort().reverse()
    toDelete.forEach(thisIndex => messages.splice(thisIndex, 1))
    selected = [];
  }
  render()
}



function onSubmit(subject, body){
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
  messages.push(newMessage)
  composeOpen = 0;
  render();
}



function onCancel(){
  composeOpen = 0;
  render();
}

render()
function render(){
  ReactDOM.render(
  <InboxPage
    messages={messages}
    selected={selected}
    composeOpen={composeOpen}
    onMarkAsReadMessage={onMarkAsReadMessage}
    onStarMessage={onStarMessage}
    onUnstarMessage={onUnstarMessage}
    onSelectMessage={onSelectMessage}
    onDeselectMessage={onDeselectMessage}
    onOpenComposeForm={onOpenComposeForm}
    onSelectAllMessages={onSelectAllMessages}
    onDeselectAllMessages={onDeselectAllMessages}
    onMarkAsReadSelectedMessages={onMarkAsReadSelectedMessages}
    onMarkAsUnreadSelectedMessages={onMarkAsUnreadSelectedMessages}
    onApplyLabelSelectedMessages={onApplyLabelSelectedMessages}
    onRemoveLabelSelectedMessages={onRemoveLabelSelectedMessages}
    onDeleteSelectedMessages={onDeleteSelectedMessages}
    onSubmit={onSubmit}
    onCancel={onCancel}
  />
    , document.getElementById('root'));
  registerServiceWorker();
};
