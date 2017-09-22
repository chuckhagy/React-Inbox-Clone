import getMessages from '../../requests/getMessages'

export default function getMessagesProcess(){
  return(dispatch, getState) => {
    return getMessages().then(messages =>{
      messages = messages.sort(function(b, a) {
      return new Date(a.date) - new Date(b.date)
});
      dispatch({
        type: 'GET_MESSAGES',
        messages: messages
      })
      return messages;
    })
  }
}
