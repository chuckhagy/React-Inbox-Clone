import updateMessage from '../../requests/updateMessage'

export default function markAsReadMessageProcess(messageId){
  return(dispatch, getState) => {
    updateMessage(messageId, "read").then( () =>{
      dispatch({
      type: 'MARK_AS_READ',
      messageId: messageId
    })
    }
    )
  }
}
