import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './rootReducer';
import thunkMiddleware from 'redux-thunk'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const enhancers = composeEnhancers(applyMiddleware(thunkMiddleware));

export default function (){
  return createStore(rootReducer, enhancers);
}
