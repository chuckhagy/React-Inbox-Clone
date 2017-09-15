import deleteMessage from '../../requests/deleteMessage'

export default function deleteMessagesProcess(messageId){
  return (dispatch, getState) => {    
      return deleteMessage(messageId)
      .then( () =>{
        dispatch({type: 'DELETE', messageId: messageId})
        return messageId
        }
      )
    }
    }

    // dispatch({type: 'CLEAR_SELECTED'})
