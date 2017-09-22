import updateMessage from '../../requests/updateMessage'

export default function markAsUnreadSelectedMessagesProcess(){
  return(dispatch, getState) => {
    dispatch({type: 'TOOLBAR_LOAD_ON'})
    getState().selected.forEach(message =>{
      updateMessage(message, "read").then( () => {
        dispatch({type: 'MARK_AS_READ_SELECTED', id: message})
      })
      .then(record => {
        dispatch({type: 'TOOLBAR_LOAD_OFF'})
    })
  }
)
}
}
