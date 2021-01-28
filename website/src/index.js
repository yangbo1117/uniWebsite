import React from 'react';
import 'core-js/es'; 
import 'react-app-polyfill/ie9'; 
import 'react-app-polyfill/stable';
import ReactDOM from 'react-dom';
import { Route, HashRouter } from 'react-router-dom';
import ERoute from './route/routes';
import 'assets/css/styles.scss';

ReactDOM.render(
    <HashRouter>
        <Route component={ERoute}/>
    </HashRouter>,
    document.getElementById('root')
);
