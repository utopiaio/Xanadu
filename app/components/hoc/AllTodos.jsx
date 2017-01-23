import React, { Component, PropTypes } from 'react';

class AllTodos extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (<div>[All Todos]</div>);
  }
}

AllTodos.propTypes = {};

AllTodos.defaultProps = {};

module.exports = AllTodos;
