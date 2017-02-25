import React, { PropTypes } from 'react';

import { Menu, MenuLink, MenuIcon, MenuText } from 'App/components/styled/Menu.jsx';

const App = ({ children }) => (
  <div className="xanadu-container">
    <div className="xanadu-container__body">{ children }</div>

    <Menu className="xanadu-container__menu menu">
      <MenuLink onlyActiveOnIndex to="/" activeClassName="menu_active">
        <MenuIcon className="icon-archive" />
        <MenuText>Xanadu</MenuText>
      </MenuLink>

      <MenuLink to="/current" activeClassName="menu_active">
        <MenuIcon className="icon-location" />
        <MenuText>Now</MenuText>
      </MenuLink>

      <MenuLink to="/all" activeClassName="menu_active">
        <MenuIcon className="icon-archive" />
        <MenuText>All</MenuText>
      </MenuLink>

      <MenuLink to="/setting" activeClassName="menu_active">
        <MenuIcon className="icon-cog" />
        <MenuText>Setting</MenuText>
      </MenuLink>
    </Menu>
  </div>
);

App.propTypes = {
  children: PropTypes.element.isRequired,
};

App.defaultProps = {};

module.exports = App;
