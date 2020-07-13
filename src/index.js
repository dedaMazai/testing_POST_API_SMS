import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import {Provider} from 'react-redux';
import ErrorBoundry from './components/error-boundry';
import store from './store';

import 'bootstrap/dist/css/bootstrap.css';
import './index.css';

ReactDOM.render(
    <Provider store={store}>
        <ErrorBoundry>
        <App />
        </ErrorBoundry>
    </Provider>
, document.getElementById('root'));