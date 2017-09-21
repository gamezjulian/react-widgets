import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route } from "react-router";

import './styles/index.css';

import App from './components/App';
import Posts from './components/Posts';
import registerServiceWorker from './registerServiceWorker';


const app = document.getElementById('root');
ReactDOM.render(
    <Router>
        <Route path="/" component={App}>
            <Route path="posts" component={Posts}></Route></Route>
    </Router>,
    app);
    
registerServiceWorker();
