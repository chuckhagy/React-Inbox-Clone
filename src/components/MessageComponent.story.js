import React from 'react';
import { storiesOf } from '@storybook/react';
import MessageComponent from './MessageComponent';

storiesOf('MessageComponent', module).add('Happy Path', () =>
  <MessageComponent
    message={{
      id: 1,
      subject: "You can't input the protocol without calculating the mobile RSS protocol!",
      read: false,
      starred: false,
      labels: ['dev', 'personal'],
      selected: true
    }}
  />
);
