import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Geral from './components/geral';
import Segunda from './components/segundaPagina'

const elemento = document.getElementById('root')

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route path='/' exact={true} component={Geral} />
            <Route path='/segunda' component={Segunda} />
        </Switch>
    </BrowserRouter>
,elemento) 