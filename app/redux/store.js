/* global window */

import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import notificationLogger from 'App/redux/middleware/notification.js';
import todo from 'App/redux/reducers/todo.js';
import location from 'App/redux/reducers/location.js';
import range from 'App/redux/reducers/range.js';

const store = createStore(
  combineReducers({ todo, location, range }),
  { todo: [], location: { accuracy: 1000, longitude: 0, latitude: 0 }, range: 100 },
  window.devToolsExtension
    ? compose(applyMiddleware(thunk, notificationLogger), window.devToolsExtension())
    : applyMiddleware(thunk, notificationLogger),
);

module.exports = store;
