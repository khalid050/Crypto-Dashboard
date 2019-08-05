import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App'
import './styles.scss';
import {Provider} from 'react-redux'
import configureStore from './redux/configureStore'
import { addCurrency } from './redux/actions/selectCurrencies';

const store  = configureStore()


store.dispatch(addCurrency('1'))

console.log(store.getState())

const renderer = (
    <Provider store={store}>
        <App/>
    </Provider>
)
ReactDOM.render(renderer, document.getElementById('root'));

