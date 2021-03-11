import React from 'react';
import 'core-js/es'; 
import 'react-app-polyfill/ie9'; 
import 'react-app-polyfill/stable';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter } from 'react-router-dom';
import ERoute from './route/routes';
import './font/font.css';
import 'assets/css/styles.scss';

ReactDOM.render(
    <BrowserRouter>
        <Route component={ERoute}/>
    </BrowserRouter>,
    document.getElementById('root')
);
