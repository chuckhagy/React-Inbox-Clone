import updateMessage from '../../requests/updateMessage'

export default function removeLabelSelectedMessagesProcess(label){
  return(dispatch, getState) => {let theseMessages = getState().messages
  getState().selected.forEach(message =>{
    dispatch({type: 'TOOLBAR_LOAD_ON'})
    let labels = theseMessages.find(thisMessage => thisMessage.id === message).labels
    if (!labels.includes(label)) {
      dispatch({type: 'TOOLBAR_LOAD_OFF'})
      return
    }
    let newLabels = labels.filter(thisLabel => thisLabel !== label)
    updateMessage(message, "removeLabel", newLabels).then( () =>{
    dispatch({type: 'REMOVE_LABEL_SELECTED', id: message, label: label})
    } 
  )
  }
  )}
}
