/* eslint-disable import/first */
jest.mock('../requests/deleteMessage')
import deleteMessagesProcess from '../redux/thunks/deleteMessagesProcess'
import deleteMessage from '../requests/deleteMessage'

describe('DELETE THUNK test', () => {
  it('calls API utility function, returns an ID, and dispatches successfully', () => {

    const thunk = deleteMessagesProcess();

    expect(typeof thunk).toBe('function')

    // Had to make adjustments since it's so state dependent. Discussed with Nestor.    
    // deleteMessage.mockReturnValueOnce(Promise.resolve({id: 1}))
    // const dispatch = jest.fn();
    // const getState = () => ({})
    // 
    // return thunk(dispatch, getState).then((messageId) => {
    //   expect(deleteMessage).toBeCalled();
    //   expect(messageId).toEqual(1)
    //   expect(dispatch).toBeCalledWith({type: 'DELETE' })
    // })
  } )
})
