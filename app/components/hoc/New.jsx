/* global window */
/* eslint no-console: 0 */

import React, { Component, PropTypes } from 'react';

import { addAsync } from 'App/redux/actions/todo.js';

import ScrollView from 'App/components/styled/ScrollView.jsx';
import Input from 'App/components/styled/Input.jsx';
import Button from 'App/components/styled/Button.jsx';

class New extends Component {
  constructor(props) {
    super(props);
    this.state = {
      task: '',
      location: {},
    };
  }

  componentDidMount() {
    this.unsubscribe = this.context.store.subscribe(() => {
      this.setState({ location: this.context.store.getState().location });
    });
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();

    if (this.state.task.length > 2) {
      this.context.store.dispatch(addAsync(this.state.task));
      this.setState({ task: '' });
      this.props.router.goBack();
    }
  }

  render() {
    return (
      <ScrollView height="calc(100vh - 50px)">
        <form style={{ padding: '1em' }} onSubmit={e => this.handleSubmit(e)}>
          <Input
            type="text"
            name="task"
            placeholder="New Task"
            value={this.state.task}
            onChange={e => this.handleChange(e)}
            minLength="3"
            maxLength="160"
            required
          />

          <Button active size="md" disabled={this.state.task.length < 3}><i className="icon-circle-plus" /> Add New Task</Button>
        </form>

        <i style={{ textAlign: 'center', marginTop: '0.5em', marginBottom: '.25em', fontSize: '2em' }} className="icon-location-2" />
        <span style={{ textAlign: 'center' }}>Accuracy within <b style={{ color: '#1da1f2' }}>{window.parseInt(this.state.location.accuracy)}</b> meters</span>
      </ScrollView>
    );
  }
}

New.contextTypes = {
  store: PropTypes.object,
};

New.propTypes = {
  router: PropTypes.shape({
    goBack: PropTypes.func.isRequired,
  }).isRequired,
};

module.exports = New;
