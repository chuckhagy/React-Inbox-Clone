export default function rootReducer(
  currentState = {},
  action
){
  switch(action.type){
    case '':
    return{

    }
    default:
    return currentState;
  }
}
