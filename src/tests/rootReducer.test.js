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
      selected: [1],
      composeOpen: 0,
      selectedMessageCount: 1,
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
  it('should open the compose form', () => {
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
      type: 'OPEN_COMPOSE_FORM',
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
      composeOpen: 1,
      selectedMessageCount: 0,
      starLoading: null,
      unstarLoading: null
    }
    expect(rootReducer(currentState, action)).toEqual(nextState);
  })
  it('should select all messages', () => {
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
      type: 'SELECT_ALL',
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
  it('should deselect all messages', () => {
    const currentState = {
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
    const action = {
      type: 'DESELECT_ALL',
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
  it('should turn on the toolbar loading image', () => {
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
      type: 'TOOLBAR_LOAD_ON',
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
      toolbarLoading: true,
      unstarLoading: null
    }
    expect(rootReducer(currentState, action)).toEqual(nextState);
  })
  it('should turn off the toolbar loading image', () => {
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
      toolbarLoading: true,
      unstarLoading: null
    }
    const action = {
      type: 'TOOLBAR_LOAD_OFF',
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
      toolbarLoading: false,
      unstarLoading: null
    }
    expect(rootReducer(currentState, action)).toEqual(nextState);
  })
  it('should mark selected messages as unread', () => {
    const currentState = {
      messages: [{
          "id": 1,
          "subject": "yo",
          "read": true,
          "starred": false,
          "labels": [],
          "body": 'yoz'
        }],
      selected: [1],
      composeOpen: 0,
      selectedMessageCount: 1,
      starLoading: null,
      toolbarLoading: true,
      unstarLoading: null
    }
    const action = {
      type: 'MARK_AS_UNREAD_SELECTED',
      id: 1
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
      toolbarLoading: false,
      unstarLoading: null
    }
    expect(rootReducer(currentState, action)).toEqual(nextState);
  })
  it('should mark selected messages as Read', () => {
    const currentState = {
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
      toolbarLoading: true,
      unstarLoading: null
    }
    const action = {
      type: 'MARK_AS_READ_SELECTED',
      id: 1
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
      selected: [1],
      composeOpen: 0,
      selectedMessageCount: 1,
      starLoading: null,
      toolbarLoading: false,
      unstarLoading: null
    }
    expect(rootReducer(currentState, action)).toEqual(nextState);
  })
  it('should apply label to selected messages', () => {
    const currentState = {
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
      toolbarLoading: true,
      unstarLoading: null
    }
    const action = {
      type: 'APPLY_LABEL_SELECTED',
      id: 1,
      label: 'personal'
    }
    const nextState = {
      messages: [{
          "id": 1,
          "subject": "yo",
          "read": false,
          "starred": false,
          "labels": ['personal'],
          "body": 'yoz'
        }],
      selected: [1],
      composeOpen: 0,
      selectedMessageCount: 1,
      starLoading: null,
      toolbarLoading: false,
      unstarLoading: null
    }
    expect(rootReducer(currentState, action)).toEqual(nextState);
  })
  it('should REMOVE label to selected messages', () => {
    const currentState = {
      messages: [{
          "id": 1,
          "subject": "yo",
          "read": false,
          "starred": false,
          "labels": ['personal'],
          "body": 'yoz'
        }],
      selected: [1],
      composeOpen: 0,
      selectedMessageCount: 1,
      starLoading: null,
      toolbarLoading: true,
      unstarLoading: null
    }
    const action = {
      type: 'REMOVE_LABEL_SELECTED',
      id: 1,
      label: 'personal'
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
      toolbarLoading: false,
      unstarLoading: null
    }
    expect(rootReducer(currentState, action)).toEqual(nextState);
  })
  it('should delete selected messages', () => {
    const currentState = {
      messages: [{
          "id": 1,
          "subject": "yo",
          "read": false,
          "starred": false,
          "labels": ['personal'],
          "body": 'yoz'
        }],
      selected: [1],
      composeOpen: 0,
      selectedMessageCount: 1,
      starLoading: null,
      toolbarLoading: true,
      unstarLoading: null
    }
    const action = {
      type: 'DELETE',
      id: 1
    }
    const nextState = {
      messages: [],
      selected: [],
      composeOpen: 0,
      selectedMessageCount: 0,
      starLoading: null,
      toolbarLoading: true,
      unstarLoading: null
    }
    expect(rootReducer(currentState, action)).toEqual(nextState);
  })
  it('should clear selected', () => {
    const currentState = {
      messages: [{
          "id": 1,
          "subject": "yo",
          "read": false,
          "starred": false,
          "labels": ['personal'],
          "body": 'yoz'
        }],
      selected: [1],
      composeOpen: 0,
      selectedMessageCount: 1,
      starLoading: null,
      toolbarLoading: true,
      unstarLoading: null
    }
    const action = {
      type: 'CLEAR_SELECTED'
    }
    const nextState = {
      messages: [{
          "id": 1,
          "subject": "yo",
          "read": false,
          "starred": false,
          "labels": ['personal'],
          "body": 'yoz'
        }],
      selected: [],
      composeOpen: 0,
      selectedMessageCount: 0,
      starLoading: null,
      toolbarLoading: false,
      unstarLoading: null
    }
    expect(rootReducer(currentState, action)).toEqual(nextState);
  })
  it('should close the compose window', () => {
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
      composeOpen: 1,
      selectedMessageCount: 0,
      starLoading: null,
      toolbarLoading: false,
      unstarLoading: null
    }
    const action = {
      type: 'COMPOSE_CANCEL'
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
      toolbarLoading: false,
      unstarLoading: null
    }
    expect(rootReducer(currentState, action)).toEqual(nextState);
  })
  it('should close the compose window', () => {
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
      composeOpen: 1,
      selectedMessageCount: 0,
      starLoading: null,
      toolbarLoading: false,
      unstarLoading: null
    }
    const action = {
      type: 'COMPOSE_CANCEL'
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
      toolbarLoading: false,
      unstarLoading: null
    }
    expect(rootReducer(currentState, action)).toEqual(nextState);
  })
  it('should submit a new message', () => {
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
        composeOpen: 1,
        selectedMessageCount: 0,
        starLoading: null,
        toolbarLoading: false,
        unstarLoading: null
      }
      const action = {
        type: 'SUBMIT',
        newMessage:  {
                "id": 2,
                "subject": "hey there",
                "read": false,
                "starred": false,
                "labels": [],
                "body": 'yoz'
                    }
      }
      const nextState = {
        messages: [{
            "id": 2,
            "subject": "hey there",
            "read": false,
            "starred": false,
            "labels": [],
            "body": 'yoz'
          },
          {
            "id": 1,
            "subject": "yo",
            "read": false,
            "starred": false,
            "labels": [],
            "body": 'yoz'
          },
        ],
        selected: [],
        composeOpen: 0,
        selectedMessageCount: 0,
        starLoading: null,
        toolbarLoading: false,
        unstarLoading: null
      }
      expect(rootReducer(currentState, action)).toEqual(nextState);
    })

})
