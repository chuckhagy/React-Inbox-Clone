import InboxPage from '../components/InboxPage'
import { connect } from 'react-redux'
import {compose, lifecycle} from 'recompose'
// import updateMessage from './requests/updateMessage'
// import deleteMessage from './requests/deleteMessage'
// import createMessage from './requests/createMessage'
import getMessagesProcess from './thunks/getMessagesProcess'
import markAsReadMessageProcess from './thunks/markAsReadMessageProcess'
import starMessageProcess from './thunks/starMessageProcess'
import unstarMessageProcess from './thunks/unstarMessageProcess'
import markAsUnreadSelectedMessagesProcess from './thunks/markAsUnreadSelectedMessagesProcess'
import markAsReadSelectedMessagesProcess from './thunks/markAsReadSelectedMessagesProcess'
import applyLabelSelectedMessagesProcess from './thunks/applyLabelSelectedMessagesProcess'
import removeLabelSelectedMessagesProcess from './thunks/removeLabelSelectedMessagesProcess'
import deleteMessagesProcess from './thunks/deleteMessagesProcess'
import submitProcess from './thunks/submitProcess'

function mapStateToProps(state){
  return {...state}
}

function mapDispatchToProps(dispatch){
  return{
    onDidMount: () => dispatch(getMessagesProcess()),
    onMarkAsReadMessage: messageId => dispatch(markAsReadMessageProcess(messageId)),
    onStarMessage: messageId => dispatch(starMessageProcess(messageId)),
    onUnstarMessage: messageId => dispatch(unstarMessageProcess(messageId)),
    onSelectMessage: messageId => dispatch({type: 'SELECT_MESSAGE', messageId: messageId}),
    onDeselectMessage: messageId => dispatch({type: 'DESELECT_MESSAGE', messageId: messageId}),
    onOpenComposeForm: () => dispatch({type: 'OPEN_COMPOSE_FORM'}),
    onSelectAllMessages: () => dispatch({type: 'SELECT_ALL'}),
    onDeselectAllMessages: () => dispatch({type: 'DESELECT_ALL'}),
    onMarkAsUnreadSelectedMessages: () => dispatch(markAsUnreadSelectedMessagesProcess()),
    onMarkAsReadSelectedMessages: () => dispatch(markAsReadSelectedMessagesProcess()),
    onApplyLabelSelectedMessages: label => dispatch(applyLabelSelectedMessagesProcess(label)),
    onRemoveLabelSelectedMessages: label => dispatch(removeLabelSelectedMessagesProcess(label)),
    onDeleteSelectedMessages: () => dispatch(deleteMessagesProcess()),
    onCancel: () => dispatch({type: 'COMPOSE_CANCEL'}),
    onSubmit: (subject, body) => dispatch(submitProcess(subject, body))
   }    
  }
  
const connectToStore = connect(mapStateToProps, mapDispatchToProps)

const withLifecycle = lifecycle({
  componentDidMount(){
    this.props.onDidMount()
  }
})

export default compose(connectToStore, withLifecycle)(InboxPage);
