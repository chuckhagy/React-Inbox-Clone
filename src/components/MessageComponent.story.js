import React from 'react';
import { storiesOf } from '@storybook/react';
import MessageComponent from './MessageComponent';

storiesOf('MessageComponent', module).add('Unread', () =>
  <MessageComponent
    message={{
      id: 1,
      subject: "You can't input the protocol without calculating the mobile RSS protocol!",
      read: false,
      starred: false,
      labels: []
    }}
  />
).add('Read', () =>
  <MessageComponent
    message={{
      id: 2,
      subject: "You can't input the protocol without calculating the mobile RSS protocol!",
      read: true,
      starred: false,
      labels: []
    }}
  />
).add('Selected', () =>
  <MessageComponent
    selected={true}
    message={{
      id: 3,
      subject: "You can't input the protocol without calculating the mobile RSS protocol!",
      read: false,
      starred: false,
      selected: true,
      labels: []
    }}
  />
).add('Starred', () =>
  <MessageComponent
    message={{
      id: 4,
      subject: "You can't input the protocol without calculating the mobile RSS protocol!",
      read: false,
      starred: true,
      labels: []
    }}
  />
).add('With Labels', () =>
  <MessageComponent
    message={{
      id: 5,
      subject: "You can't input the protocol without calculating the mobile RSS protocol!",
      read: false,
      starred: false,
      labels: ['dev', 'personal'],
    }}
  />
);
