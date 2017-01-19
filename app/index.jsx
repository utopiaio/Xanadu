/* global document */

import React from 'react';
import { render } from 'react-dom';
import 'normalize.css';

function HelloWorld() {
  return (<div>🎉</div>);
}

render(<HelloWorld />, document.querySelector('#app'));
