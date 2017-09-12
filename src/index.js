import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import setupStore from './redux/setupStore'

const store = setupStore()

ReactDOM.render(<App store={store} /> , document.getElementById('root'));
