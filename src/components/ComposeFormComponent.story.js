import React from 'react';
import { storiesOf } from '@storybook/react';
import ComposeFormComponent from './ComposeFormComponent';

storiesOf('ComposeFormComponent', module).add("Happy Path!", () =>
  <ComposeFormComponent />
)