import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch, Link} from 'react-router-dom'
import CryptoApp from './components/CryptoApp'
import Header from './components/Header'
import NotFoundPage from './components/NotFoundPage'
import './styles.scss';

const routes = (
    <BrowserRouter>
    <Switch>
    <Route path='/' component = {CryptoApp} exact={true} />
    <Route path='/add' component ={Header}  />
    <Route component={NotFoundPage} />
    </Switch>
    </BrowserRouter>
)

ReactDOM.render(routes, document.getElementById('root'));