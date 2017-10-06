/* eslint-disable import/first */
jest.mock('../requests/updateMessage')
import unstarMessageProcess from '../redux/thunks/unstarMessageProcess'
import updateMessage from '../requests/updateMessage'

describe('UNSTAR THUNK test', () => {
  it('calls API utility function, returns an ID, and dispatches successfully', () => {

    const thunk = unstarMessageProcess(1);

    expect(typeof thunk).toBe('function')
    
    updateMessage.mockReturnValueOnce(Promise.resolve({id: 1}))
    const dispatch = jest.fn();
    const getState = () => ({})
    
    return thunk(dispatch, getState).then((messageId) => {
      expect(updateMessage).toBeCalled();
      expect(messageId).toEqual(1)
      expect(dispatch).toBeCalledWith({type: 'UNSTAR_LOAD_OFF', messageId: 1 })
    })
  } )
})
