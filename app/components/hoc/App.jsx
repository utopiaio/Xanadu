import React, { Component, PropTypes } from 'react';
import { Provider } from 'react-redux';

import store from 'App/redux/store.js';
import { bootLocation, watchLocation } from 'App/redux/actions/location.js';
import { bootTodoAsync } from 'App/redux/actions/todo.js';
import { bootRangeAsync } from 'App/redux/actions/range.js';

import { Menu, MenuLink, MenuIcon, MenuText } from 'App/components/styled/Menu.jsx';

// booting with current location...
store.dispatch(bootLocation());
// starting location watcher...
store.dispatch(watchLocation());
// booting from LF...
store.dispatch(bootTodoAsync());
// booting from LF...
store.dispatch(bootRangeAsync());

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Provider store={store}>
        <div className="xanadu-container">
          <div className="xanadu-container__body">{ this.props.children }</div>

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
      </Provider>
    );
  }
}

App.propTypes = {
  children: PropTypes.element.isRequired,
};

App.defaultProps = {};

module.exports = App;
