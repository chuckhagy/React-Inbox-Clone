import deleteMessage from '../../requests/deleteMessage'

export default function deleteMessagesProcess(){
  return (dispatch, getState) => {
    dispatch({type: 'TOOLBAR_LOAD_ON'})
    getState().selected.forEach(message =>{
      return deleteMessage(message, "unread").then( () => {
        dispatch({type: 'DELETE', messageId: message})
      })
      .then(record => {
        dispatch({type: 'TOOLBAR_LOAD_OFF'})
    })
  }
)
}
    }

    // dispatch({type: 'CLEAR_SELECTED'})
