import React, { Component } from 'react';
import InboxPage from './components/InboxPage'
import getMessages from './requests/getMessages'
import patchReadMessage from './requests/patchReadMessage'
import patchStarMessage from './requests/patchStarMessage'
import patchUnstarMessage from './requests/patchUnstarMessage'
import patchUnread from './requests/patchUnread'
import patchNewLabel from './requests/patchNewLabel'
import patchRemoveLabel from './requests/patchRemoveLabel'
import deleteMessage from './requests/deleteMessage'
import createMessage from './requests/createMessage'

export default class App extends Component {
  state={
    messages: [],
    selected: [],
    composeOpen: 0,
    selectedMessageCount: 0
  }

  render() {
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
      />
    )
  }

  componentDidMount(){
    getMessages().then(messages =>{
      this.setState({
        messages
      })
    })
  }


  _onMarkAsReadMessage = messageId =>{
    patchReadMessage(messageId).then( () =>{
      this.setState( prevState => {
        let newMessages = prevState.messages.slice(0);
        newMessages.find(thisMessage => thisMessage.id === messageId).read = true;
        return {
          messages: newMessages
        }
      }
    )
  }
)}

_onStarMessage = messageId =>{
  patchStarMessage(messageId).then( () =>{
  this.setState(prevState => {
    let newMessages = prevState.messages.slice(0);
    newMessages.find(thisMessage => thisMessage.id === messageId).starred = true
    return{
      messages: newMessages
    }
  })
})
}

  _onUnstarMessage = messageId =>{
    patchUnstarMessage(messageId).then( () =>{
    this.setState(prevState => {
      let newMessages = prevState.messages.slice(0);
      newMessages.find(thisMessage => thisMessage.id === messageId).starred = false
      return{
        messages: newMessages
      }
    });
  })
  }


  _onSelectMessage = messageId =>{
    this.setState(prevState =>{
      let newSelected = prevState.selected.slice(0);
      newSelected.push(messageId)
      return{
        selected: newSelected,
        selectedMessageCount: newSelected.length
      }
    })
  }

  _onDeselectMessage = messageId =>{
    this.setState(prevState =>{
      let newSelected = prevState.selected.slice(0);
      let cutIndex = newSelected.indexOf(messageId);
      newSelected.splice(cutIndex, 1);
      return{
        selected: newSelected,
        selectedMessageCount: newSelected.length
      }
    })
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
    this.state.selected.forEach(message =>{
      patchUnread(message).then( () =>{
       this.setState(prevState => {
         if(prevState.selected.length > 0){
           let newMessages = prevState.messages.splice(0);
           let toChange = newMessages.filter(message => prevState.selected.includes(message.id))
           toChange.forEach(message => message.read = false)
           return{
             messages: newMessages
           }
         }
       })
     })
    }
    )

  }

  _onMarkAsReadSelectedMessages = () =>{
    this.state.selected.forEach(message =>{
      patchReadMessage(message).then( () =>{
      this.setState(prevState => {
        if(prevState.selected.length > 0){
        let newMessages = prevState.messages.splice(0);
        let toChange = newMessages.filter(message => prevState.selected.includes(message.id))
        toChange.forEach(message => message.read = true)
        return{
          messages: newMessages
        }
      }
    })
  })
})
}


  _onApplyLabelSelectedMessages = label =>{
    this.state.selected.forEach(message =>{
      let labels = this.state.messages.find(thisMessage => thisMessage.id === message).labels
      if (labels.includes(label)) return
      patchNewLabel(message, labels, label).then( () =>{
        this.setState(prevState => {
          if(prevState.selected.length > 0){
          let newMessages = prevState.messages.splice(0)
          let toChange = newMessages.filter(message => prevState.selected.includes(message.id))
          toChange.forEach(message =>{
            if(!message.labels.includes(label))message.labels.push(label)
          })
        return{
          messages: newMessages
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
    let newLabels = labels.filter(thisLabel => thisLabel !== label)
    patchRemoveLabel(message, newLabels).then( () =>{
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
        messages: newMessages
      }
      }
    })
    })

  })
}


  _onDeleteSelectedMessages = () =>{
    this.state.selected.forEach(messageId =>{
    deleteMessage(messageId).then( () =>{
    this.setState(prevState => {
      if(prevState.selected.length > 0){
        let newMessages = prevState.messages.filter(message => !prevState.selected.includes(message.id))
        return{
          messages: newMessages
        }
      }
    })
  })
})
}

  _onSubmit = (subject, body) =>{
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
    //get ID from server change this to take id from response

    createMessage(newMessage).then(newId => {
      newMessage.id = newId.id;
      this.setState(prevState => {
      let newMessages = prevState.messages.slice(0);
      newMessages.push(newMessage);
      return{
        messages: newMessages,
        composeOpen: 0
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
