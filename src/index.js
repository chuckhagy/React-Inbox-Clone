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

let composeOpen = 0;
let selected = [];
let selectedMessageCount = 0;

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
  selectedMessageCount = selected.length;
  render();
}
function onDeselectMessage(messageId){
  let cutIndex = selected.indexOf(messageId);
  selected.splice(cutIndex, 1);
  selectedMessageCount = selected.length;
  render();
}
function onOpenComposeForm(){
  composeOpen = 1;
  render();
}
function onSelectAllMessages(){
  console.log(selectedMessageCount)
 selected = messages.map(message => message.id);
 selectedMessageCount = selected.length;
 render();
}
function onDeselectAllMessages(){
 selected = [];
 selectedMessageCount = selected.length;
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
    toChange.forEach(message =>{
      if(!message.labels.includes(label))message.labels.push(label)
    });
  }
  render()
}

function onRemoveLabelSelectedMessages(label){
  if(selected.length > 0){
    let toChange = messages.filter(message => selected.includes(message.id));
    toChange = messages.filter(message => message.labels.includes(label));
    toChange.forEach(message => {
      let cutIndex = message.labels.indexOf(label)
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
    selected = [1, 2];
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
    selectedMessageCount={selectedMessageCount}
  />
    , document.getElementById('root'));
  registerServiceWorker();
};
