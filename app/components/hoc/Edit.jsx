/* global window */
import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import { editAsync, removeAsync } from 'App/redux/actions/todo.js';

import ScrollView from 'App/components/styled/ScrollView.jsx';
import Button from 'App/components/styled/Button.jsx';

let Edit = ({ task, location, update, remove }) => {
  let input = null;

  return (
    <ScrollView height="calc(100vh - 50px)">
      <form style={{ padding: '1em', paddingTop: '3em' }} onSubmit={(e) => { e.preventDefault(); update(task.id, input.value); input.value = ''; }}>
        <input
          type="text"
          placeholder={task.task}
          ref={(node) => { input = node; if (input !== null) { input.focus(); input.value = task.task; } }}
          minLength="3"
          maxLength="160"
          required
        />

        <Button
          active
          size="md"
          type="submit"
        ><i className="icon-inbox" />&nbsp;&nbsp;Update Task</Button>

        <Button
          delete
          size="md"
          type="button"
          onClick={() => remove(task.id)}
        ><i className="icon-trash" /> Remove Task</Button>
      </form>

      <i style={{ textAlign: 'center', marginBottom: '.25em', fontSize: '2em' }} className="icon-location" />
      <span style={{ textAlign: 'center' }}>Current accuracy within <b style={{ color: '#1da1f2' }}>{ window.parseInt(location.accuracy).toLocaleString('us')}</b> meters</span>
    </ScrollView>
  );
};

Edit.propTypes = {
  task: PropTypes.shape({
    id: PropTypes.number,
    task: PropTypes.string,
  }).isRequired,
  location: PropTypes.shape({
    accuracy: PropTypes.func.number,
    longitude: PropTypes.func.number,
    latitude: PropTypes.func.number,
  }).isRequired,
  update: PropTypes.func.isRequired,
  remove: PropTypes.func.isRequired,
};

Edit = connect((state, props) => ({
  task: (() => {
    const taskId = Number(props.router.params.id);
    const task = state.todo.filter(todo => todo.id === taskId);

    if (task.length === 1) {
      return {
        id: taskId,
        task: task[0].task,
      };
    }

    return {
      id: -1,
      task: '',
    };
  })(),
  location: state.location,
}), (dispatch, props) => ({
  update(id, task) {
    if (task.length > 2) {
      dispatch(editAsync(id, task));
      props.router.goBack();
    }
  },
  remove(id) {
    dispatch(removeAsync(id));
    props.router.goBack();
  },
}))(Edit);

module.exports = Edit;
