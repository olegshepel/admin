import 'react-app-polyfill/ie9';
import 'react-app-polyfill/ie11';
import './polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { createStore, compose, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';

import App from './App';
import rootReducer from './store/reducers';
import setAuthorizationToken from './store/actions/auth/utils/setAuthorizationToken';

const composeEnhances = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const middleware = applyMiddleware(thunk);
const store = createStore(rootReducer, composeEnhances(applyMiddleware(thunk)));


if (localStorage.key) {
  setAuthorizationToken(localStorage.key);
}

const app = (
  <Provider store={store}>
    <App />
  </Provider>
)

ReactDOM.render(app, document.getElementById('root'));

serviceWorker.unregister();
