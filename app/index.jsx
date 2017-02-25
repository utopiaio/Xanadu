/* global window, document */
import React, { Component } from 'react';
import { Route, Router, IndexRoute, hashHistory } from 'react-router';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import 'normalize.css';

import 'App/static/icon/style.css';
import 'App/scss/app.scss';

import store from 'App/redux/store.js';
import { bootLocation, watchLocation } from 'App/redux/actions/location.js';
import { bootTodoAsync } from 'App/redux/actions/todo.js';
import { bootRangeAsync } from 'App/redux/actions/range.js';

import App from 'App/components/hoc/App.jsx';
import Index from 'App/components/hoc/Index.jsx';
import AllTodos from 'App/components/hoc/AllTodos.jsx';
import CurrentTodos from 'App/components/hoc/CurrentTodos.jsx';
import Setting from 'App/components/hoc/Setting.jsx';
import New from 'App/components/hoc/New.jsx';
import Edit from 'App/components/hoc/Edit.jsx';
import NotFound from 'App/components/presentational/NotFound.jsx';

class Xanadu extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    // TODO: connect and Theme subscribe for ThemeProvider
  }

  componentWillUnmount() {
    // TODO: unsubscribe from the store Luke
  }

  render() {
    return (
      <Provider store={store}>
        <Router history={hashHistory}>
          <Route path="/" component={App}>
            <IndexRoute component={Index} />
            <Route path="/current" component={CurrentTodos} />
            <Route path="/all" component={AllTodos} />
            <Route path="/setting" component={Setting} />
            <Route path="/new" component={New} />
            <Route path="/edit/:id" component={Edit} />
            <Route path="*" component={NotFound} />
          </Route>
        </Router>
      </Provider>
    );
  }
}

window.document.addEventListener('deviceready', () => {
  // booting with current location...
  store.dispatch(bootLocation());
  // starting location watcher...
  store.dispatch(watchLocation());
  // booting from LF...
  store.dispatch(bootTodoAsync());
  // booting from LF...
  store.dispatch(bootRangeAsync());

  render(<Xanadu />, document.querySelector('#app'));
}, false);
