import React, { Component, PropTypes } from 'react';

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

        <Menu className="menu">
          <MenuLink to="/current" activeClassName="menu_active">Current</MenuLink>
          <MenuLink to="/all" activeClassName="menu_active">All</MenuLink>
          <MenuLink to="/setting" activeClassName="menu_active">Setting</MenuLink>
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
