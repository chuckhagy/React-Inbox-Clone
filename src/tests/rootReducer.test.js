import rootReducer from '../redux/rootReducer'
import data from './mock-data.json'


describe('root reducer testing INBOX', () => {
  it('should get the messages', () => {
    const currentState = {
      messages: [],
      selected: [],
      composeOpen: 0,
      selectedMessageCount: 0,
      starLoading: [],
      unstarLoading: null
    }
    const action = {
      type: 'GET_MESSAGES',
      messages: data
    }
    const nextState = {
      messages: [{
          "id": 1,
          "subject": "yo",
          "read": true,
          "starred": false,
          "labels": [],
          "body": 'yoz'
        }],
      selected: [],
      composeOpen: 0,
      selectedMessageCount: 0,
      starLoading: [],
      unstarLoading: null
    }
    expect(rootReducer(currentState, action)).toEqual(nextState);
  })
  it('mark a selected message as read', () => {
    const currentState = {
      messages: [{
          "id": 1,
          "subject": "yo",
          "read": false,
          "starred": false,
          "labels": [],
          "body": 'yoz'
        }],
      selected: [],
      composeOpen: 0,
      selectedMessageCount: 0,
      starLoading: [],
      unstarLoading: null
    }
    const action = {
      type: 'MARK_AS_READ',
      messageId: 1
    }
    const nextState = {
      messages: [{
          "id": 1,
          "subject": "yo",
          "read": true,
          "starred": false,
          "labels": [],
          "body": 'yoz'
        }],
      selected: [],
      composeOpen: 0,
      selectedMessageCount: 0,
      starLoading: [],
      unstarLoading: null
    }
    expect(rootReducer(currentState, action)).toEqual(nextState);
  })
  it('should turn on the star loading image', () => {
    const currentState = {
      messages: [{
          "id": 1,
          "subject": "yo",
          "read": false,
          "starred": false,
          "labels": [],
          "body": 'yoz'
        }],
      selected: [],
      composeOpen: 0,
      selectedMessageCount: 0,
      starLoading: [],
      unstarLoading: null
    }
    const action = {
      type: 'STAR_LOAD_ON',
      messageId: 1
    }
    const nextState = {
      messages: [{
          "id": 1,
          "subject": "yo",
          "read": false,
          "starred": false,
          "labels": [],
          "body": 'yoz'
        }],
      selected: [],
      composeOpen: 0,
      selectedMessageCount: 0,
      starLoading: 1,
      unstarLoading: null
    }
    expect(rootReducer(currentState, action)).toEqual(nextState);
  })
  it('should turn off the star loading', () => {
    const currentState = {
      messages: [{
          "id": 1,
          "subject": "yo",
          "read": false,
          "starred": false,
          "labels": [],
          "body": 'yoz'
        }],
      selected: [],
      composeOpen: 0,
      selectedMessageCount: 0,
      starLoading: 1,
      unstarLoading: null
    }
    const action = {
      type: 'STAR_LOAD_OFF',
      messageId: 1
    }
    const nextState = {
      messages: [{
          "id": 1,
          "subject": "yo",
          "read": false,
          "starred": true,
          "labels": [],
          "body": 'yoz'
        }],
      selected: [],
      composeOpen: 0,
      selectedMessageCount: 0,
      starLoading: null,
      toolbarLoading: null,
      unstarLoading: null
    }
    expect(rootReducer(currentState, action)).toEqual(nextState);
  })
  it('should turn on the star Unloading', () => {
    const currentState = {
      messages: [{
          "id": 1,
          "subject": "yo",
          "read": false,
          "starred": false,
          "labels": [],
          "body": 'yoz'
        }],
      selected: [],
      composeOpen: 0,
      selectedMessageCount: 0,
      starLoading: 1,
      unstarLoading: null
    }
    const action = {
      type: 'UNSTAR_LOAD_ON',
      messageId: 1
    }
    const nextState = {
      messages: [{
          "id": 1,
          "subject": "yo",
          "read": false,
          "starred": false,
          "labels": [],
          "body": 'yoz'
        }],
      selected: [],
      composeOpen: 0,
      selectedMessageCount: 0,
      starLoading: 1,
      unstarLoading: 1
    }
    expect(rootReducer(currentState, action)).toEqual(nextState);
  })
  it('should turn off the star Unloading', () => {
    const currentState = {
      messages: [{
          "id": 1,
          "subject": "yo",
          "read": false,
          "starred": false,
          "labels": [],
          "body": 'yoz'
        }],
      selected: [],
      composeOpen: 0,
      selectedMessageCount: 0,
      starLoading: 1,
      unstarLoading: null
    }
    const action = {
      type: 'UNSTAR_LOAD_OFF',
      messageId: 1
    }
    const nextState = {
      messages: [{
          "id": 1,
          "subject": "yo",
          "read": false,
          "starred": false,
          "labels": [],
          "body": 'yoz'
        }],
      selected: [],
      composeOpen: 0,
      selectedMessageCount: 0,
      starLoading: null,
      toolbarLoading: null,
      unstarLoading: null
    }
    expect(rootReducer(currentState, action)).toEqual(nextState);
  })
  it('should select one message', () => {
    const currentState = {
      messages: [{
          "id": 1,
          "subject": "yo",
          "read": false,
          "starred": false,
          "labels": [],
          "body": 'yoz'
        }],
      selected: [],
      composeOpen: 0,
      selectedMessageCount: 0,
      starLoading: null,
      unstarLoading: null
    }
    const action = {
      type: 'SELECT_MESSAGE',
      messageId: 1
    }
    const nextState = {
      messages: [{
          "id": 1,
          "subject": "yo",
          "read": false,
          "starred": false,
          "labels": [],
          "body": 'yoz'
        }],
      selected: [1],
      composeOpen: 0,
      selectedMessageCount: 1,
      starLoading: null,
      unstarLoading: null
    }
    expect(rootReducer(currentState, action)).toEqual(nextState);
  })
  it('should Deselect one message', () => {
    const currentState = {
      messages: [{
          "id": 1,
          "subject": "yo",
          "read": false,
          "starred": false,
          "labels": [],
          "body": 'yoz'
        }],
      selected: [],
      composeOpen: 0,
      selectedMessageCount: 0,
      starLoading: null,
      unstarLoading: null
    }
    const action = {
      type: 'DESELECT_MESSAGE',
      messageId: 1
    }
    const nextState = {
      messages: [{
          "id": 1,
          "subject": "yo",
          "read": false,
          "starred": false,
          "labels": [],
          "body": 'yoz'
        }],
      selected: [],
      composeOpen: 0,
      selectedMessageCount: 0,
      starLoading: null,
      unstarLoading: null
    }
    expect(rootReducer(currentState, action)).toEqual(nextState);
  })
})
