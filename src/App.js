import React, { Component } from 'react';
import InboxPage from './components/InboxPage'
import getMessages from './requests/getMessages'
import updateMessage from './requests/updateMessage'
import deleteMessage from './requests/deleteMessage'
import createMessage from './requests/createMessage'


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
    getMessages().then(messages =>{
      messages = messages.sort(function(b, a) {
      return new Date(a.date) - new Date(b.date)
});
      this.props.store.dispatch({
        type: 'GET_MESSAGES',
        messages: messages
      })
    })
  }

  _onMarkAsReadMessage = messageId =>{
    updateMessage(messageId, "read").then( () =>{
      this.props.store.dispatch({
      type: 'MARK_AS_READ',
      messageId: messageId
    })
  }
)}

_onStarMessage = messageId =>{
  this.props.store.dispatch({type: 'STAR_LOAD_ON', messageId: messageId})
  updateMessage(messageId, "star").then( record =>{
    this.props.store.dispatch({type: 'STAR_LOAD_OFF', messageId: record.id})
})
}

  _onUnstarMessage = messageId =>{
    this.props.store.dispatch({type: 'UNSTAR_LOAD_ON', messageId: messageId})
    updateMessage(messageId, "star").then( record =>{
      this.props.store.dispatch({type: 'UNSTAR_LOAD_OFF', messageId: record.id})
  })
  }


  _onSelectMessage = messageId =>{
    this.props.store.dispatch({type: 'SELECT_MESSAGE', messageId: messageId})
  }

  _onDeselectMessage = messageId =>{
    this.props.store.dispatch({type: 'DESELECT_MESSAGE', messageId: messageId})
  }

  _onOpenComposeForm = () =>{
    this.setState(prevState =>{
      let newComposeOpen = 1;
      return{
        composeOpen: newComposeOpen
      }
    })
  }

  _onSelectAllMessages = () =>{
    this.setState(prevState => {
      let newSelected = prevState.messages.map(message => message.id)
      return{
        selected: newSelected,
        selectedMessageCount: newSelected.length
      }
    })
  }

  _onDeselectAllMessages = () =>{
    this.setState(prevState => {
      let newSelected = [];
      return{
        selected: newSelected,
        selectedMessageCount: newSelected.length
      }
    })
  }
  _onMarkAsUnreadSelectedMessages = () =>{
    this.setState({toolbarLoading: true})
    this.state.selected.forEach(message =>{
      updateMessage(message, "unread").then( () =>{
       this.setState(prevState => {
         if(prevState.selected.length > 0){
           let newMessages = prevState.messages.splice(0);
           let toChange = newMessages.filter(message => prevState.selected.includes(message.id))
           toChange.forEach(message => message.read = false)
           return{
             messages: newMessages,
             toolbarLoading: false
           }
         }
       })
     })
    }
    )

  }

  _onMarkAsReadSelectedMessages = () =>{
    this.setState({toolbarLoading: true})
    this.state.selected.forEach(message =>{
      updateMessage(message, 'read').then( () =>{
      this.setState(prevState => {
        if(prevState.selected.length > 0){
        let newMessages = prevState.messages.splice(0);
        let toChange = newMessages.filter(message => prevState.selected.includes(message.id))
        toChange.forEach(message => message.read = true)
        return{
          messages: newMessages,
          toolbarLoading: false
        }
      }
    })
  })
})
}


  _onApplyLabelSelectedMessages = label =>{
    this.state.selected.forEach(message =>{
      let labels = this.state.messages.find(thisMessage => {
      return thisMessage.id === message
    }).labels
    this.setState({toolbarLoading: true})
      if (labels.includes(label)) return
      updateMessage(message, "addLabel", labels, label).then( () =>{
        this.setState(prevState => {
          if(prevState.selected.length > 0){
          let newMessages = prevState.messages.splice(0)
          let toChange = newMessages.filter(message => prevState.selected.includes(message.id))
          toChange.forEach(message =>{
            if(!message.labels.includes(label))message.labels.push(label)
          })
        return{
          messages: newMessages,
          toolbarLoading: false

        }
        }
      })
      })

    })
  }

  _onRemoveLabelSelectedMessages = label =>{
    this.state.selected.forEach(message =>{
    let labels = this.state.messages.find(thisMessage => thisMessage.id === message).labels
    if (!labels.includes(label)) return
    this.setState({toolbarLoading: true})
    let newLabels = labels.filter(thisLabel => thisLabel !== label)
    updateMessage(message, "removeLabel", newLabels).then( () =>{
      this.setState(prevState => {
        if(prevState.selected.length > 0){
        let newMessages = prevState.messages.splice(0)
        let toChange = newMessages.filter(message => prevState.selected.includes(message.id))
        toChange = toChange.filter(message => message.labels.includes(label))
        toChange.forEach(message =>{
          let cutIndex = message.labels.indexOf(label)
          message.labels.splice(cutIndex, 1);
        })
      return{
        messages: newMessages,
        toolbarLoading: false

      }
      }
    })
    })

  })
}

  _onDeleteSelectedMessages = () =>{
    this.setState({toolbarLoading: true})
    this.state.selected.forEach(messageId =>{
    deleteMessage(messageId).then( () =>{
    this.setState(prevState => {
      console.log(prevState.selected)
      if(prevState.selected.length > 0){
        let newMessages = prevState.messages.filter(message => !prevState.selected.includes(message.id))
        return{
          messages: newMessages,
          selected: [],
          toolbarLoading: false
        }
      }
    })
  })
})
}

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
      this.setState(prevState => {
      let newMessages = prevState.messages.slice(0);
      newMessages.push(newMessage);
      this.componentDidMount();
      return{
        messages: newMessages,
        composeOpen: 0,
        toolbarLoading: false

    }
  })
})
 }

  _onCancel = () =>{
    this.setState({
      composeOpen: 0
    });
  }

}
