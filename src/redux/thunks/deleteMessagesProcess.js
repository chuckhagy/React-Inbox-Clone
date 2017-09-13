import deleteMessage from '../../requests/deleteMessage'

export default function deleteMessagesProcess(){
  return(dispatch, getState) => {
    if (getState().selected.length === 0) return
    dispatch({type: 'TOOLBAR_LOAD_ON'})
    getState().selected.forEach(messageId =>{
      deleteMessage(messageId).then( () =>{
      dispatch({type: 'DELETE', id: messageId})
          }
        )}
      )
      dispatch({type: 'CLEAR_SELECTED'})
  }
}
