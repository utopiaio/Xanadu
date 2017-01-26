/* global window */
/* eslint no-console: 0 */
import localforage from 'localforage';

import { TODO_ADD, TODO_REMOVE, TODO_TOGGLE, TODO_EDIT } from 'App/redux/constants/todo.js';
import { LF_STORE } from 'App/config/localforage.js';
import getCurrentPosition from 'App/util/getCurrentPosition.js';

/**
 * 1. Each async functions will communicate with LF to make sure we're in-sync
 * as much as possible. Another more _efficent_ way of keeping in-sync will
 * be only to sync data at app-launch and close 🤔. In a way we're repeating
 * those sweet pure reducer _function here_...hey! hey! fix your face.
 *
 * 2. LF actions are performed *after* dispatch - a LF failure isn't considered
 * code black...yet
 * Lenny: Black, that's the worst color there is. no offense Carol.
 * Carol: No worries, I get it all the time.
 *
 * I'm going to stab you 🔪🔪🔪
 *
 * Variables *cough* <constants>, that interact with LF will be prefixed with
 * `lf`, if naming collision happens it will be out of pure coincidence.
 */

function add({ id, task, coordinate }) {
  return {
    type: TODO_ADD,
    payload: {
      id,
      task,
      coordinate,
    },
  };
}

function addAsync(task) {
  return (dispatch) => {
    getCurrentPosition.then((location) => {
      // I'm tempted to seal this _const_ object
      const todo = {
        id: Date.now(),
        task,
        coordinate: location.coords,
      };

      dispatch(add(todo));

      localforage
        .getItem(LF_STORE.TODO)
        .then((lfTodo) => {
          localforage.setItem(LF_STORE.TODO, [...lfTodo, todo]);
        }, (err) => {
          console.warn('Unable to sync with LF', err);
        });
    }, (err) => {
      console.warn(err);
    });
  };
}

