/* global document */

import React from 'react';
import { render } from 'react-dom';
import 'normalize.css';

require('App/scss/app.scss');

import routes from 'App/config/routes.jsx';

render(routes, document.querySelector('#app'));
