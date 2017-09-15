export default function rootReducer(
  currentState = {
    messages: [],
    selected: [],
    composeOpen: 0,
    selectedMessageCount: 0,
    starLoading: null,
    unstarLoading: null,
    toolbarLoading: null
  },
  action
){
  switch(action.type){
    case 'GET_MESSAGES':
      return{
        messages: action.messages,
        selected: [],
        composeOpen: 0,
        selectedMessageCount: 0,
        starLoading: [],
        unstarLoading: null
      }
    case 'MARK_AS_READ':
      let newMessages = currentState.messages.slice(0);
      newMessages.find(thisMessage => thisMessage.id === action.messageId).read = true;
        return {
          ...currentState,
          messages: newMessages
        }
    case 'STAR_LOAD_ON':
        return {
          ...currentState,
          starLoading: action.messageId
        }
    case 'UNSTAR_LOAD_ON':
        return {
          ...currentState,
          unstarLoading: action.messageId
        }
    case 'STAR_LOAD_OFF':
      let newMessagesStar = currentState.messages.slice(0);
      newMessagesStar.find(thisMessage => thisMessage.id === action.messageId).starred = true
        return {
          ...currentState,
          messages: newMessagesStar,
          starLoading: null,
          unstarLoading: null,
          toolbarLoading: null,

        }
    case 'UNSTAR_LOAD_OFF':
      let newMessagesUnstar = currentState.messages.slice(0);
      newMessagesUnstar.find(thisMessage => thisMessage.id === action.messageId).starred = false
        return {
          ...currentState,
          messages: newMessagesUnstar,
          starLoading: null,
          unstarLoading: null,
          toolbarLoading: null,

        }
    case 'SELECT_MESSAGE':
      let newSelected = currentState.selected.slice(0);
      newSelected.push(action.messageId)
      return{
        ...currentState,
        selected: newSelected,
        selectedMessageCount: newSelected.length
      }
    case 'DESELECT_MESSAGE':
      let newSelectedMSG = currentState.selected.slice(0);
      let cutIndex = newSelectedMSG.indexOf(action.messageId);
      newSelectedMSG.splice(cutIndex, 1);
      console.log(newSelectedMSG)
      return{
        ...currentState,
        selected: newSelectedMSG,
        selectedMessageCount: newSelectedMSG.length
      }
    case 'OPEN_COMPOSE_FORM':
      let newComposeOpen = 1;
      return{
        ...currentState,
        composeOpen: newComposeOpen
      }
    case 'SELECT_ALL':
      let newSelectedList = currentState.messages.map(message => message.id)
      return{
        ...currentState,
        selected: newSelectedList,
        selectedMessageCount: newSelectedList.length
      }
    case 'DESELECT_ALL':
      let newSelectedListEmpty = [];
      return{
        ...currentState,
        selected: newSelectedListEmpty,
        selectedMessageCount: newSelectedListEmpty.length
      }
    case 'TOOLBAR_LOAD_ON':
      return{
        ...currentState,
        toolbarLoading: true
      }
    case 'TOOLBAR_LOAD_OFF':
      return{
        ...currentState,
        toolbarLoading: false
      }

    case 'MARK_AS_UNREAD_SELECTED':
      let newMessagesUnread = currentState.messages;
      newMessagesUnread.find(message => message.id === action.id).read = false
        return{
          ...currentState,
          messages: newMessagesUnread,
          toolbarLoading: false
        }

    case 'MARK_AS_READ_SELECTED':
      let newMessagesRead = currentState.messages;
      newMessagesRead.find(message => message.id === action.id).read = true
        return{
          ...currentState,
          messages: newMessagesRead,
          toolbarLoading: false
        }

    case 'APPLY_LABEL_SELECTED':
      let newMessagesLabels = currentState.messages;
      newMessagesLabels.find(message => message.id === action.id).labels.push(action.label)
      return{
        ...currentState,
        messages: newMessagesLabels,
        toolbarLoading: false
      }

      case 'REMOVE_LABEL_SELECTED':
        let newMessagesCutLabels = currentState.messages;
        console.log(newMessagesCutLabels)
        let theseLabels = newMessagesCutLabels.find(message => message.id === action.id).labels.filter(thisLabel => thisLabel !== action.label)
        newMessagesCutLabels.find(message => message.id === action.id).labels = theseLabels;
        console.log(newMessagesCutLabels)
        return{
          ...currentState,
          messages: newMessagesCutLabels,
          toolbarLoading: false
        }

    case 'DELETE':
    let postDeleteMessages = currentState.messages.filter(message => message.id !== action.id);
    return{
      ...currentState,
      messages: postDeleteMessages
    }

    case 'CLEAR_SELECTED':
    return{
      ...currentState,
      selected: [],
      toolbarLoading: false
    }

    case 'COMPOSE_CANCEL':
    return{
      ...currentState,
      composeOpen: 0
    }

    case 'SUBMIT':
    let withCreatedMessages = currentState.messages.slice(0);
    withCreatedMessages.unshift(action.newMessage);
    return{
      ...currentState,
      messages: withCreatedMessages,
      composeOpen: 0,
      toolbarLoading: false

    }

    default:
    return currentState;
  }
}
