import React from 'react';
import { Route, Router, IndexRoute, browserHistory } from 'react-router';
import { ThemeProvider } from 'styled-components';

import { lightTheme, darkTheme } from 'App/config/theme.js';

import App from 'App/components/hoc/App.jsx';
import Index from 'App/components/presentational/Index.jsx';
import AllTodos from 'App/components/hoc/AllTodos.jsx';
import CurrentTodos from 'App/components/hoc/CurrentTodos.jsx';
import Setting from 'App/components/hoc/Setting.jsx';
import NotFound from 'App/components/presentational/NotFound.jsx';

const routes = (
  // TODO: Luke, connect to the store
  <ThemeProvider theme={lightTheme}>
    <Router history={browserHistory}>
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

module.exports = routes;
