import React, { Component, PropTypes } from 'react';

class CurrentTodos extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (<div>[Current Todos]</div>);
  }
}

CurrentTodos.propTypes = {};

CurrentTodos.defaultProps = {};

module.exports = CurrentTodos;
