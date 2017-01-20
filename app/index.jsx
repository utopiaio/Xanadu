/* global document */

import React from 'react';
import { render } from 'react-dom';
import 'normalize.css';

require('App/scss/app.scss');

function Rafi() {
  return (<div>🎉</div>);
}

render(<Rafi />, document.querySelector('#app'));
