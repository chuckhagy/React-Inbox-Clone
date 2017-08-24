import React from 'react';
import { storiesOf } from '@storybook/react';
import ToolbarComponent from './ToolbarComponent'

storiesOf('Toolbar Component', module).add('None Selected', () =>
  <ToolbarComponent
  config={{
    messages: ["a", "b"],
    selected: [],
    composeButton: false
  }}
  
  />
).add('Some Selected', () =>
  <ToolbarComponent
  config={{
    messages: ["a", "b"],
    selected: ["a"],
    composeButton: false
  }}
  
  />
)
.add('All Selected', () =>
  <ToolbarComponent
  config={{
    messages: ["a", "b"],
    selected: ["a", "b"],
    composeButton: false
  }}
  
  />
)
.add('Compose Button', () =>
  <ToolbarComponent
  config={{
    messages: ["a", "b"],
    selected: [],
    composeButton: true
  }}
  
  />
);