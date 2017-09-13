import React, { Component } from 'react';
import InboxPage from './components/InboxPage'
import updateMessage from './requests/updateMessage'
import deleteMessage from './requests/deleteMessage'
import createMessage from './requests/createMessage'
import getMessagesProcess from './redux/thunks/getMessagesProcess'
import markAsReadMessageProcess from './redux/thunks/markAsReadMessageProcess'
import starMessageProcess from './redux/thunks/starMessageProcess'
import unstarMessageProcess from './redux/thunks/unstarMessageProcess'
import markAsUnreadSelectedMessagesProcess from './redux/thunks/markAsUnreadSelectedMessagesProcess'
import markAsReadSelectedMessagesProcess from './redux/thunks/markAsReadSelectedMessagesProcess'
import applyLabelSelectedMessagesProcess from './redux/thunks/applyLabelSelectedMessagesProcess'
import removeLabelSelectedMessagesProcess from './redux/thunks/removeLabelSelectedMessagesProcess'


export default class App extends Component {
    constructor(props) {
      super(props);

      this.state={
        messages: [],
        selected: [],
        composeOpen: 0,
        selectedMessageCount: 0,
        starLoading: [],
        unstarLoading: null
      }

      this.props.store.subscribe(() =>{
        this.setState(this.props.store.getState());
      })
  }

  render() {
    let loaded;
    if(this.state.messages.length > 0){
      loaded = true;
    }
    return (
      <InboxPage
        messages={this.state.messages}
        selected={this.state.selected}
        composeOpen={this.state.composeOpen}
        selectedMessageCount={this.state.selectedMessageCount}
        onMarkAsReadMessage={this._onMarkAsReadMessage}
        onStarMessage={this._onStarMessage}
        onUnstarMessage={this._onUnstarMessage}
        onSelectMessage={this._onSelectMessage}
        onDeselectMessage={this._onDeselectMessage}
        onOpenComposeForm={this._onOpenComposeForm}
        onSelectAllMessages={this._onSelectAllMessages}
        onDeselectAllMessages={this._onDeselectAllMessages}
        onMarkAsReadSelectedMessages={this._onMarkAsReadSelectedMessages}
        onMarkAsUnreadSelectedMessages={this._onMarkAsUnreadSelectedMessages}
        onApplyLabelSelectedMessages={this._onApplyLabelSelectedMessages}
        onRemoveLabelSelectedMessages={this._onRemoveLabelSelectedMessages}
        onDeleteSelectedMessages={this._onDeleteSelectedMessages}
        onSubmit={this._onSubmit}
        onCancel={this._onCancel}
        loaded={loaded}
        onError={this._error}
        starLoading={this.state.starLoading}
        unstarLoading={this.state.unstarLoading}
        toolbarLoading={this.state.toolbarLoading}
      >
    </InboxPage>
    )
  }

  componentDidMount(){
    this.props.store.dispatch(getMessagesProcess())
  }

  _onMarkAsReadMessage = messageId =>{
    this.props.store.dispatch(markAsReadMessageProcess(messageId))
    }

  _onStarMessage = messageId =>{
    this.props.store.dispatch(starMessageProcess(messageId))
  }

  _onUnstarMessage = messageId =>{
    this.props.store.dispatch(unstarMessageProcess(messageId))
      }


  _onSelectMessage = messageId =>{
    this.props.store.dispatch({type: 'SELECT_MESSAGE', messageId: messageId})
  }

  _onDeselectMessage = messageId =>{
    this.props.store.dispatch({type: 'DESELECT_MESSAGE', messageId: messageId})
  }

  _onOpenComposeForm = () =>{
    this.props.store.dispatch({type: 'OPEN_COMPOSE_FORM'})
  }

  _onSelectAllMessages = () =>{
    this.props.store.dispatch({type: 'SELECT_ALL'})
  }

  _onDeselectAllMessages = () =>{
    this.props.store.dispatch({type: 'DESELECT_ALL'})
  }

  _onMarkAsUnreadSelectedMessages = () => {
    this.props.store.dispatch(markAsUnreadSelectedMessagesProcess())
  }

  _onMarkAsReadSelectedMessages = () => {
    this.props.store.dispatch(markAsReadSelectedMessagesProcess())
}

  _onApplyLabelSelectedMessages = label =>{
    this.props.store.dispatch(applyLabelSelectedMessagesProcess(label))
  }

  _onRemoveLabelSelectedMessages = label =>{
    this.props.store.dispatch(removeLabelSelectedMessagesProcess(label))
    }

  _onDeleteSelectedMessages = () =>{
    if (this.state.selected.length === 0) return
    this.props.store.dispatch({type: 'TOOLBAR_LOAD_ON'})
    this.state.selected.forEach(messageId =>{
      deleteMessage(messageId).then( () =>{
      this.props.store.dispatch({type: 'DELETE', id: messageId})
          }
        )}
      )
      this.props.store.dispatch({type: 'CLEAR_SELECTED'})
      }

  _onCancel = () =>{
    this.props.store.dispatch({type: 'COMPOSE_CANCEL'})
  }

//do this one
  _onSubmit = (subject, body) =>{
    this.setState({toolbarLoading: true})
    let newMessage = {
      "id": 0,
      "subject": '',
      "read": false,
      "starred": false,
      "labels": [],
      "body": ''
    };
    newMessage.subject = subject;
    newMessage.body = body;
    createMessage(newMessage).then(newId => {
      newMessage.id = newId.id;
      this.props.store.dispatch({type: 'SUBMIT', newMessage: newMessage})
  }).then(this.componentDidMount())
 }

}
