/* global window */

import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import todo from 'App/redux/reducers/todo.js';

const store = createStore(
  combineReducers({ todo }),
  { todo: [] },
  window.devToolsExtension
    ? compose(applyMiddleware(thunk), window.devToolsExtension())
    : applyMiddleware(thunk),
);

module.exports = store;
