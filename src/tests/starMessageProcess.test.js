/* eslint-disable import/first */
jest.mock('../requests/updateMessage')
import starMessageProcess from '../redux/thunks/starMessageProcess'
import updateMessage from '../requests/updateMessage'

describe('DELETE THUNK test', () => {
  it('calls API utility function, returns an ID, and dispatches successfully', () => {

    const thunk = starMessageProcess(1);

    expect(typeof thunk).toBe('function')
    
    updateMessage.mockReturnValueOnce(Promise.resolve({id: 1}))
    const dispatch = jest.fn();
    const getState = () => ({})
    
    return thunk(dispatch, getState).then((messageId) => {
      expect(updateMessage).toBeCalled();
      expect(messageId).toEqual(1)
      expect(dispatch).toBeCalledWith({type: 'STAR_LOAD_ON', messageId: 1 })
    })
  } )
})
