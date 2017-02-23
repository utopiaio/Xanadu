/* global document */
import React, { Component } from 'react';
import { Route, Router, IndexRoute, hashHistory } from 'react-router';
import { ThemeProvider } from 'styled-components';
import { render } from 'react-dom';
import 'normalize.css';
import 'App/static/icon/style.css';

require('App/scss/app.scss');

import { lightTheme, darkTheme } from 'App/config/theme.js';
import App from 'App/components/hoc/App.jsx';
import Index from 'App/components/presentational/Index.jsx';
import AllTodos from 'App/components/hoc/AllTodos.jsx';
import CurrentTodos from 'App/components/hoc/CurrentTodos.jsx';
import Setting from 'App/components/hoc/Setting.jsx';
import NotFound from 'App/components/presentational/NotFound.jsx';

class Rafi extends Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: '', // TODO: store.theme...
    };
  }

  componentDidMount() {
    // TODO: connect and Theme subscribe for ThemeProvider
  }

  componentWillUnmount() {
    // TODO: unsubscribe from the store Luke
  }

  render() {
    return (
      <ThemeProvider theme={lightTheme}>
        <Router history={hashHistory}>
          <Route path="/" component={App}>
            <IndexRoute component={Index} />
            <Route path="/all" component={AllTodos} />
            <Route path="/current" component={CurrentTodos} />
            <Route path="/setting" component={Setting} />
            <Route path="*" component={NotFound} />
          </Route>
        </Router>
      </ThemeProvider>
    );
  }
}

render(<Rafi />, document.querySelector('#app'));

module.exports = App;
