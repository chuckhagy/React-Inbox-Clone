import { configure } from '@storybook/react';
function loadStories() {
  require('../src/index.css')
  require('../src/components/MessageComponent.story');
  require('../src/components/MessagesComponent.story');
  require('../src/components/ToolbarComponent.story');
  require('../src/components/ComposeFormComponent.story');
  require('../src/components/InboxPageLayout.story');
}
configure(loadStories, module);