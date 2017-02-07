import React from 'react';
import ReactDOM from 'react-dom';
import App from './App/app.js';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import counterReducer from './redux/reducers';
import { incrementCounter, decrementCounter } from './redux/actions/index.js';

let store = createStore(counterReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
console.log('Environment', process.env.NODE_ENV);
ReactDOM.render(
            <Provider store={store}>
              <App />
            </Provider>,
            document.getElementById('app-target')
            );
