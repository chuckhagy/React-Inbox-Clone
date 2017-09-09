import React from 'react';
import { shallow, mount } from 'enzyme';
import MessageComponent from '../components/MessageComponent'
import MessagesComponent from '../components/MessagesComponent'

const message = {
    subject: 'Hi',
    body: "wazzup",
    starred: true,
    read: true,
    labels: ["a", "b"]
  }
  
  let selectedMessageIds = [1, 2]
  
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
  }
  ]
  
const selected = true;
  
describe('shallow testing portion', ()  => {
  let shallowWrapper = shallow(<MessageComponent message={message} selected={selected} />);
  it('should appear with subject', () => {
    expect(shallowWrapper.find('a')).toHaveLength(1);
  });
  it('should appear READ when data says so and vice versa', () => {
    if(message.read) expect(shallowWrapper.find('.read')).toHaveLength(1);
    else expect(shallowWrapper.find('.read')).toHaveLength(0);
  });
  it('should appear STARRED when data says so and vice versa', () => {
    if(message.star) expect(shallowWrapper.find('.star')).toHaveLength(1);
    else expect(shallowWrapper.find('.star')).toHaveLength(0);
  });
  it('should appear CHECKED when selected prop passed down', () => {
    if(selected) expect(shallowWrapper.find('input').prop('checked')).toBe(true);
    else expect(shallowWrapper.find('input').prop('checked')).toBe(false);
  })
  it('should fire onMarkAsReadMessage when the subject is clicked', () => {
    const onMarkAsReadMessage = jest.fn();
    mount(<MessageComponent message={message} selected={selected} onMarkAsReadMessage={onMarkAsReadMessage} />).find('a').simulate('click');
    expect(onMarkAsReadMessage).toHaveBeenCalled()
  });
  it('should fire onSelectMessage when the subject is clicked - and Vice Versa', () => {
    const onSelectMessage = jest.fn();
    const onDeselectMessage = jest.fn();
    mount(<MessageComponent message={message} selected={selected} onSelectMessage={onSelectMessage} onDeselectMessage={onDeselectMessage} />).find('input').simulate('click');
    if(selected)expect(onDeselectMessage).toHaveBeenCalled()
    else expect(onSelectMessage).toHaveBeenCalled()
  });
  // it('should fire onStarMessage when the subject is clicked - and Vice Versa', () => {
  //   const onStarMessage = jest.fn();
  //   const onUnstarMessage = jest.fn();
  //   mount(<MessageComponent message={message} selected={selected} onStarMessage={onStarMessage} onUnstarMessage={onUnstarMessage} />).find('.star').simulate('click');
  //   if(message.starred)expect(onUnstarMessage).toHaveBeenCalled()
  //   else expect(onStarMessage).toHaveBeenCalled()
  // });
});
  

describe('Messages Component Tests', ()  => {
  it('should have correct number of messages displayed', () => {
    let count = mount(<MessagesComponent messages={messages} selectedMessageIds={selectedMessageIds} />).find('.message').length;
    expect(count).toEqual(messages.length)
  });
  it('should trigger callbacks OnSelectMessage and OnDeSelectMessage', () => {
    const onSelectMessage = jest.fn();
    const onDeselectMessage = jest.fn();
    let myThing = mount(<MessagesComponent
      messages={messages}
      selectedMessageIds={selectedMessageIds}
      onSelectMessage={onSelectMessage}
      onDeselectMessage={onDeselectMessage}

    />).find('input').at(0);
    
    myThing.simulate('click');
    if(myThing.prop('checked')) expect(onDeselectMessage).toHaveBeenCalled()
    else expect(onSelectMessage).toHaveBeenCalled();
    });
    
  it('should trigger callbacks onMarkAsReadMessage', () => {
    const onMarkAsReadMessage = jest.fn();
    let myThing = mount(<MessagesComponent
      messages={messages}
      selectedMessageIds={selectedMessageIds}
      onMarkAsReadMessage={onMarkAsReadMessage}

    />).find('a').at(0);
    
    myThing.simulate('click');
    if(!messages[0].read) expect(onMarkAsReadMessage).toHaveBeenCalled()
    });


});