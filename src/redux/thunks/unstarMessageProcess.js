import updateMessage from '../../requests/updateMessage'

export default function starMessageProcess(messageId){
  return(dispatch, getState) => {
    dispatch({type: 'UNSTAR_LOAD_ON', messageId: messageId})
    return updateMessage(messageId, "unstar").then( record =>{
      dispatch({type: 'UNSTAR_LOAD_OFF', messageId: record.id})
      return(messageId)
  })

  }
}
