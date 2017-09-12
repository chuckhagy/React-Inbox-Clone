export default function rootReducer(
  currentState = {
    messages: [],
    selected: [],
    composeOpen: 0,
    selectedMessageCount: 0,
    starLoading: null,
    unstarLoading: null
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
    default:
    return currentState;
  }
}
