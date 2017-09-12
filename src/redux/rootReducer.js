export default function rootReducer(
  currentState = {
    messages: [],
    selected: [],
    composeOpen: 0,
    selectedMessageCount: 0,
    starLoading: [],
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
    default:
    return currentState;
  }
}
