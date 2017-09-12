import { createStore } from 'redux';
import rootReducer from './rootReducer';

export default function (){
  return createStore(rootReducer);
}
