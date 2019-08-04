import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App'
import './styles.scss';
import configureStore from './redux/configureStore'

const store  = configureStore()
console.log(store.getState())

ReactDOM.render(
    <App />
    , document.getElementById('root')
);

