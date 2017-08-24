import React from 'react';
import { storiesOf } from '@storybook/react';
import InboxPageLayout from './InboxPageLayout';
import MessagesComponent from './MessagesComponent';
import ToolbarComponent from './ToolbarComponent';
import ComposeFormComponent from './ComposeFormComponent';

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
"selected": true,
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
"selected": true,
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


storiesOf('InboxPageLayout', module).add('Happy Path', () =>
  <InboxPageLayout>
    <ToolbarComponent
      messages={messages}
      selectedMessageIds={messages.filter(message =>{
        return message.selected;
      }).map(message => message.id)}
    />
    <ComposeFormComponent />
    <MessagesComponent
      messages={messages}
      selectedMessageIds={messages.filter(message =>{
        return message.selected;
      }).map(message => message.id)}
    /> 
  </InboxPageLayout>
    
)