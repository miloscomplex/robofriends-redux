import React from 'react';
import ReactDOM from 'react-dom/client';
import './style/index.css';
import 'tachyons';
import App from './App'
import thunkMiddleware from 'redux-thunk';
import { applyMiddleware, combineReducers, createStore } from 'redux';
import { Provider } from 'react-redux';
import { createLogger } from 'redux-logger';
import { searchRobots, requestRobots } from './reducers';

const logger = createLogger();

const rootReducer = combineReducers({ searchRobots, requestRobots })
const store = createStore(rootReducer, applyMiddleware(thunkMiddleware, logger))

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div>
      <Provider store={store} >
        <App />
      </Provider>
    </div>
  </React.StrictMode>
);