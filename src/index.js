import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App'
import './styles.scss';
import configureStore from './redux/configureStore'
import { addCurrency } from './redux/actions/selectCurrencies';

const store  = configureStore()


store.dispatch(addCurrency('1'))

console.log(store.getState())
ReactDOM.render(
    <App />
    , document.getElementById('root')
);

