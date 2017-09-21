import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute } from "react-router";

import './styles/index.css';

import App from './components/App';
import registerServiceWorker from './registerServiceWorker';


const app = document.getElementById('root');
ReactDOM.render(
    <Router>
        <Route path="/" component={App}>
            <IndexRoute component={App}></IndexRoute>
        </Route>
    </Router>,
    app);
registerServiceWorker();
