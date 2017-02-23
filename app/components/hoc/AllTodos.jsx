import React, { Component, PropTypes } from 'react';

import ScrollView from 'App/components/styled/ScrollView.jsx';
import Header from 'App/components/styled/Header.jsx';

class AllTodos extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <ScrollView height="calc(100vh - 50px)">
        <Header>
          <a>this is the header</a>
          <a>this</a>
        </Header>

        <ScrollView height="calc(100vh - 114px)">
          <h1>this is the content</h1>
          <h1>this is the content</h1>
          <h1>this is the content</h1>
          <h1>this is the content</h1>
          <h1>this is the content</h1>
          <h1>this is the content</h1>
          <h1>this is the content</h1>
          <h1>this is the content</h1>
          <h1>this is the content</h1>
          <h1>this is the content</h1>
          <h1>this is the content</h1>
          <h1>this is the content</h1>
          <h1>this is the content</h1>
          <h1>this is the content</h1>
          <h1>this is the content</h1>
          <h1>this is the content</h1>
          <h1>this is the content</h1>
          <h1>this is the content</h1>
          <h1>this is the content</h1>
          <h1>this is the content</h1>
          <h1>this is the content</h1>
          <h1>this is the content</h1>
          <h1>this is the content</h1>
          <h1>this is the content</h1>
          <h1>this is the content</h1>
          <h1>this is the content</h1>
          <h1>this is the content</h1>
          <h1>this is the content</h1>
          <h1>this is the content</h1>
          <h1>this is the content</h1>
          <h1>this is the content</h1>
          <h1>this is the content</h1>
          <h1>this is the content</h1>
        </ScrollView>
      </ScrollView>
    );
  }
}

AllTodos.propTypes = {};

AllTodos.defaultProps = {};

module.exports = AllTodos;
