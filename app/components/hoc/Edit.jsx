/* global window */
import React, { Component, PropTypes } from 'react';

import { editAsync, removeAsync } from 'App/redux/actions/todo.js';

import ScrollView from 'App/components/styled/ScrollView.jsx';
import Button from 'App/components/styled/Button.jsx';

class Edit extends Component {
  constructor(props, context) {
    super(props);

    const state = context.store.getState();
    const taskId = Number(this.props.router.params.id);
    const task = state.todo.filter(todo => todo.id === taskId);

    if (task.length === 1) {
      this.state = {
        id: taskId,
        task: task[0].task,
        location: state.location,
      };
    } else {
      this.state = {
        id: taskId,
        task: task[0].task,
        location: state.location,
      };
    }
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  update(id, task) {
    this.context.store.dispatch(editAsync(id, task));
    this.props.router.goBack();
  }

  remove(id) {
    this.context.store.dispatch(removeAsync(id));
    this.props.router.goBack();
  }

  render() {
    return (
      <ScrollView height="calc(100vh - 50px)">
        <form
          style={{ padding: '1em', paddingTop: '3em' }}
          onSubmit={(e) => { e.preventDefault(); this.update(this.state.id, this.state.task); }}
        >
          <input
            type="text"
            name="task"
            placeholder={this.state.task}
            value={this.state.task}
            onChange={e => this.handleChange(e)}
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
            onClick={() => this.remove(this.state.id)}
          ><i className="icon-trash" /> Remove Task</Button>
        </form>

        <i style={{ textAlign: 'center', marginBottom: '.25em', fontSize: '2em' }} className="icon-location" />
        <span style={{ textAlign: 'center' }}>Current accuracy within <b style={{ color: '#1da1f2' }}>{ window.parseInt(this.state.location.accuracy).toLocaleString('us')}</b> meters</span>
      </ScrollView>
    );
  }
}

Edit.propTypes = {
  router: PropTypes.shape().isRequired,
};

Edit.contextTypes = {
  store: PropTypes.object,
};

module.exports = Edit;

