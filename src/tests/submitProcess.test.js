/* eslint-disable import/first */
jest.mock('../requests/createMessage')
import submitProcess from '../redux/thunks/submitProcess'
import createMessage from '../requests/createMessage'

describe('get menu process API THUNK processing fetch', () => {
  it('calls API utility function, returns an id, and dispatches successfully', () => {

    const thunk = submitProcess({
      subject: 'yo',
      read: true,
      starred: false,
      labels: [],
      body: 'yoz'
    });

    expect(typeof thunk).toBe('function')

    createMessage.mockReturnValueOnce(Promise.resolve({id: 1}))
    const dispatch = jest.fn();
    const getState = () => ({})


// console.log(thunk, '<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<')

    return thunk(dispatch, getState).then((newMessage) => {
      expect(createMessage).toBeCalled();
      expect(newMessage.id).toEqual(1)
      expect(dispatch).toBeCalledWith({type: 'SUBMIT', newMessage })
    })
  } )
})
