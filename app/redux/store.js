/* global window */

import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import todo from 'App/redux/reducers/todo.js';
import location from 'App/redux/reducers/location.js';
import range from 'App/redux/reducers/range.js';

const store = createStore(
  combineReducers({ todo, location, range }),
  { todo: [], location: {}, range: 100 },
  window.devToolsExtension
    ? compose(applyMiddleware(thunk), window.devToolsExtension())
    : applyMiddleware(thunk),
);

module.exports = store;
