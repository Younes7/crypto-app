import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Crypto from './components/Crypto';
import registerServiceWorker from './registerServiceWorker';

import {
    BrowserRouter, Route, Switch
} from 'react-router-dom';

const Root = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path='/' component={App} />
            <Route path='/:crypto' component={Crypto} /> 
        </Switch>
    </BrowserRouter>
)
ReactDOM.render(<Root />, document.getElementById('root'));
registerServiceWorker();