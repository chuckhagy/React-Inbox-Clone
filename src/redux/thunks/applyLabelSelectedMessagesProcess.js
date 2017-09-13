import updateMessage from '../../requests/updateMessage'

export default function applyLabelSelectedMessagesProcess(label){
  return(dispatch, getState) => {
    let theseMessages = getState().messages
    getState().selected.forEach(message =>{
      dispatch({type: 'TOOLBAR_LOAD_ON'})
      let labels = theseMessages.find(thisMessage => thisMessage.id === message).labels
      if (labels.includes(label)) return
      updateMessage(message, "addLabel", labels, label).then(
      dispatch({type: 'APPLY_LABEL_SELECTED', id: message, label: label})
    )
    })
}
}
