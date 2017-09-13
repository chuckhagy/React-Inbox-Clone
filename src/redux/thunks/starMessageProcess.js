import updateMessage from '../../requests/updateMessage'

export default function starMessageProcess(messageId){
  return(dispatch, getState) => {
    dispatch({type: 'STAR_LOAD_ON', messageId: messageId})
    updateMessage(messageId, "star").then( record =>{
      dispatch({type: 'STAR_LOAD_OFF', messageId: record.id})
  })
  }
}
