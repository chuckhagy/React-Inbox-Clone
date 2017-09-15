/* eslint-disable import/first */
jest.mock('../requests/getMessages')
import getMessagesProcess from '../redux/thunks/getMessagesProcess'
import getMessages from '../requests/getMessages'

describe('DELETE THUNK test', () => {
  it('calls API utility function, returns an ID, and dispatches successfully', () => {

    const thunk = getMessagesProcess(1);
    expect(typeof thunk).toBe('function')
    const dataMessages = [{
      body: undefined,
      date: "2017-09-15T17:41:16.000Z",
      id: "recckucn779KUdVZk",
      labels: [],
      read: undefined,
      starred: undefined,
      subject: "More"
    }]
    
    getMessages.mockReturnValueOnce(Promise.resolve(dataMessages))
    const dispatch = jest.fn();
    const getState = () => ({})
    
    return thunk(dispatch, getState).then((messages) => {

      expect(getMessages).toBeCalled();
      expect(messages).toEqual(dataMessages)
      expect(dispatch).toBeCalledWith({type: 'GET_MESSAGES', messages: messages})
    
    })
  } )
})
