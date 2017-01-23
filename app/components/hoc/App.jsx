import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

import Menu from 'App/components/styled/Menu.jsx';
import MenuLink from 'App/components/styled/MenuLink.jsx';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <div>{ this.props.children }</div>

        <Menu>
          <MenuLink to="/current" activeClassName="active-link">Current</MenuLink>
          <MenuLink to="/all" activeClassName="active-link">All</MenuLink>
          <MenuLink to="/setting" activeClassName="active-link">Setting</MenuLink>
        </Menu>
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.element.isRequired,
};

App.defaultProps = {};

module.exports = App;
