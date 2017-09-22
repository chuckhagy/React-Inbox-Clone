import createMessage from '../../requests/createMessage'

export default function submitProcess(subject, body){
  return(dispatch, getState) => {
    dispatch({type: 'TOOLBAR_LOAD_ON'})
    let newMessage = {
      "id": 0,
      "subject": '',
      "read": false,
      "starred": false,
      "labels": [],
      "body": ''
    };
    newMessage.subject = subject;
    newMessage.body = body;
    return createMessage(newMessage).then(newId => {
      newMessage.id = newId.id;
       dispatch({type: 'SUBMIT', newMessage: newMessage})
       return newMessage;
  })
  }
}
