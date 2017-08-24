import React from 'react';
import { storiesOf } from '@storybook/react';
import ToolbarComponent from './ToolbarComponent'


storiesOf('Toolbar Component', module).add('None Selected', () =>
  <ToolbarComponent
    messages={['a', 'b']}
    selectedMessageIds={[]}
  
  />
).add('Some Selected', () =>
  <ToolbarComponent
    messages={['a', 'b']}
    selectedMessageIds={['a']}
  
  />
)
.add('All Selected', () =>
  <ToolbarComponent
    messages={['a', 'b']}
    selectedMessageIds={['a', 'b']}
  
  />
);