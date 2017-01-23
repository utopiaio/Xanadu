import React, { Component, PropTypes } from 'react';

class NotFound extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (<div>[Not Found]</div>);
  }
}

NotFound.propTypes = {};

NotFound.defaultProps = {};

module.exports = NotFound;
