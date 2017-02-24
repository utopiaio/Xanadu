import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import { toggleAsync } from 'App/redux/actions/todo.js';
import { currentTodo } from 'App/redux/selectors/todo.js';

import ScrollView from 'App/components/styled/ScrollView.jsx';
import { Header, HeaderMeter, HeaderTitle, HeaderLink } from 'App/components/styled/Header.jsx';
import Task from 'App/components/presentational/Task.jsx';

let CurrentTodos = ({ todos, location, range, toggle, edit }) => (
  <ScrollView height="calc(100vh - 50px)">
    <Header style={{ padding: '0 1em' }}>
      <HeaderMeter>
        <span className={location.accuracy > range ? 'warn' : ''}>{ location.accuracy.toLocaleString('us') }</span>
        <small style={{ fontSize: '0.4em' }}>Meters</small>
      </HeaderMeter>

      <HeaderTitle >Xanadu</HeaderTitle>

      <HeaderLink to="/new">
        <i className="icon-circle-plus" />
      </HeaderLink>
    </Header>

    <ScrollView height="calc(100vh - 114px)">
      { todos.map(todo => (
        <Task
          key={todo.id}
          task={todo}
          toggle={toggle}
          edit={edit}
          location={location}
        />
      )) }
    </ScrollView>
  </ScrollView>
);

CurrentTodos.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
  })).isRequired,
  toggle: PropTypes.func.isRequired,
  edit: PropTypes.func.isRequired,
  range: PropTypes.number.isRequired,
  location: PropTypes.shape({
    accuracy: PropTypes.number.isRequired,
    longitude: PropTypes.number.isRequired,
    latitude: PropTypes.number.isRequired,
  }).isRequired,
};

CurrentTodos = connect(state => ({
  todos: currentTodo(state),
  location: state.location,
  range: state.range,
}), (dispatch, props) => ({
  toggle(id) {
    dispatch(toggleAsync(id));
  },
  edit(id) {
    props.router.push(`/edit/${id}`);
  },
}))(CurrentTodos);

CurrentTodos.defaultProps = {};

module.exports = CurrentTodos;
