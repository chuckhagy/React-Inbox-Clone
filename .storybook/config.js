import { configure } from '@storybook/react';
function loadStories() {
  require('../src/index.css')
  require('../src/components/MessageComponent.story');
  require('../src/components/MessagesComponent.story');
}
configure(loadStories, module);