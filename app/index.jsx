/* global window, document */
import React, { Component } from 'react';
import { Route, Router, IndexRoute, hashHistory } from 'react-router';
import { render } from 'react-dom';

import 'normalize.css';

import 'App/static/icon/style.css';
import 'App/scss/app.scss';

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
    );
  }
}

// window.document.addEventListener('deviceready', () => {
  render(<Xanadu />, document.querySelector('#app'));
// }, false);
