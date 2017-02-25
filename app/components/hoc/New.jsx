/* global window */
/* eslint no-console: 0 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import { addAsync } from 'App/redux/actions/todo.js';

import ScrollView from 'App/components/styled/ScrollView.jsx';
import Button from 'App/components/styled/Button.jsx';

let New = ({ location, add }) => {
  let input = null;

  return (
    <ScrollView height="calc(100vh - 50px)">
      <form style={{ padding: '1em', paddingTop: '3em' }} onSubmit={(e) => { e.preventDefault(); add(input.value); input.value = ''; }}>
        <input
          type="text"
          placeholder="New Task"
          ref={(node) => { input = node; if (input !== null) input.focus(); }}
          minLength="3"
          maxLength="160"
          required
        />

        <Button
          active
          size="md"
          type="submit"
        ><i className="icon-plus" /> Add New Task</Button>
      </form>

      <i style={{ textAlign: 'center', marginBottom: '.25em', fontSize: '2em' }} className="icon-location" />
      <span style={{ textAlign: 'center' }}>Current accuracy within <b style={{ color: '#1da1f2' }}>{ window.parseInt(location.accuracy).toLocaleString('us')}</b> meters</span>
    </ScrollView>
  );
};

New.propTypes = {
  location: PropTypes.shape({
    accuracy: PropTypes.func.number,
    longitude: PropTypes.func.number,
    latitude: PropTypes.func.number,
  }).isRequired,
  add: PropTypes.func.isRequired,
};

New = connect(state => ({
  location: state.location,
}), (dispatch, props) => ({
  add(task) {
    if (task.length > 2) {
      dispatch(addAsync(task));
      props.router.goBack();
    }
  },
}))(New);


module.exports = New;
