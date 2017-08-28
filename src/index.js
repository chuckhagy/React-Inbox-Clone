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
"labels": ["hot deals", "personal"]
},
{
"id": 2,
"subject": "connecting the system won't do anything, we need to input the mobile AI panel!",
"read": false,
"starred": false,
"labels": []
},
{
"id": 3,
"subject": "Use the 1080p HTTP feed, then you can parse the cross-platform hard drive!",
"read": false,
"starred": true,
"labels": ["dev"]
},
{
"id": 4,
"subject": "We need to program the primary TCP hard drive!",
"read": true,
"starred": false,
"labels": []
},
{
"id": 5,
"subject": "If we override the interface, we can get to the HTTP feed through the virtual EXE interface!",
"read": false,
"starred": false,
"labels": ["personal"]
},
{
"id": 6,
"subject": "We need to back up the wireless GB driver!",
"read": true,
"starred": true,
"labels": []
},
{
"id": 7,
"subject": "We need to index the mobile PCI bus!",
"read": true,
"starred": false,
"labels": ["dev", "personal"]
},
{
"id": 8,
"subject": "If we connect the sensor, we can get to the HDD port through the redundant IB firewall!",
"read": true,
"starred": true,
"labels": []
}
]

let selected = [1, 2, 3];

function onReadMessage(messageId){
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

render()

function render(){
  ReactDOM.render(
  <InboxPage
    messages={messages}
    selected={selected}
    onReadMessage={onReadMessage}
    onStarMessage={onStarMessage}
    onUnstarMessage={onUnstarMessage}

  />
    , document.getElementById('root'));
  registerServiceWorker();
};
