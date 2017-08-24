import React from 'react';
import { storiesOf } from '@storybook/react';
import ToolbarComponent from './ToolbarComponent'

storiesOf('Toolbar Component', module).add('None Selected', () =>
  <ToolbarComponent
  config={{
    messages: ["a", "b"],
    selected: [],
  }}
  
  />
).add('Some Selected', () =>
  <ToolbarComponent
  config={{
    messages: ["a", "b"],
    selected: ["a"],
  }}
  
  />
)
.add('All Selected', () =>
  <ToolbarComponent
  config={{
    messages: ["a", "b"],
    selected: ["a", "b"],
  }}
  
  />
)
.add('Compose Button', () =>
  <ToolbarComponent
    messages={messages}
    selectedMessageIds={messages.filter(message =>{
      return message.selected;
    }).map(message => message.id)}
  
  />
);