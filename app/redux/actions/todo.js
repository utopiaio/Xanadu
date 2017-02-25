/* global window */
/* eslint no-console: 0 */
import moment from 'moment';
import localforage from 'localforage';

import { TODO_BOOT, TODO_ADD, TODO_EDIT, TODO_TOGGLE, TODO_REMOVE } from 'App/redux/constants/todo.js';
import { LF_STORE } from 'App/config/localforage.js';

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

function bootTodo(todos) {
  return {
    type: TODO_BOOT,
    payload: {
      todos,
    },
  };
}

function bootTodoAsync() {
  return (dispatch) => {
    localforage
      .getItem(LF_STORE.TODO)
      .then((lfTodo) => {
        dispatch(bootTodo(lfTodo === null ? [] : lfTodo));

        if (window.navigator.splashscreen !== undefined) {
          setTimeout(() => {
            window.navigator.splashscreen.hide();
          }, 250);
        }
      }, (err) => {
        console.warn('Unable to boot from LF', err);
      });
  };
}

function add({ id, task, coordinate, time }) {
  return {
    type: TODO_ADD,
    payload: {
      id,
      task,
      coordinate,
      time,
    },
  };
}

function addAsync(task) {
  return (dispatch, getState) => {
    // I'm tempted to seal this _const_ object
    const todo = Object.assign({}, {
      id: Date.now(),
      task,
      time: moment().format(),
      coordinate: getState().location,
    });

    dispatch(add(todo));

    localforage
      .getItem(LF_STORE.TODO)
      .then((lfTodo) => {
        const todoDone = Object.assign({}, todo, { done: false });
        localforage.setItem(LF_STORE.TODO, lfTodo === null ? [todoDone] : [...lfTodo, todoDone]);
      }, (err) => {
        console.warn('Unable to sync with LF', err);
      });
  };
}

function remove(index) {
  return {
    type: TODO_REMOVE,
    payload: {
      index,
    },
  };
}

function removeAsync(id) {
  return (dispatch, getState) => {
    const todo = getState().todo;
    let removeIndex = -1;

    todo.forEach((t, index) => {
      if (t.id === id) {
        removeIndex = index;
      }
    });

    dispatch(remove(removeIndex));

    localforage
      .getItem(LF_STORE.TODO)
      .then((lfTodo) => {
        let lfRemoveIndex = -1;

        lfTodo.forEach((lfT, index) => {
          if (lfT.id === id) {
            lfRemoveIndex = index;
          }
        });

        localforage
          .setItem(LF_STORE.TODO, [
            ...lfTodo.slice(0, lfRemoveIndex),
            ...lfTodo.slice(lfRemoveIndex + 1),
          ])
          .then(null, (err) => {
            console.warn('Unable to sync with LF', err);
          });
      }, (err) => {
        console.warn('Unable to sync with LF', err);
      });
  };
}

function toggle(index) {
  return {
    type: TODO_TOGGLE,
    payload: {
      index,
    },
  };
}

function toggleAsync(id) {
  return (dispatch, getState) => {
    const todos = getState().todo;
    let toggleIndex = -1;

    todos.forEach((todo, index) => {
      if (todo.id === id) {
        toggleIndex = index;
      }
    });

    dispatch(toggle(toggleIndex));

    localforage
      .getItem(LF_STORE.TODO)
      .then((lfTodo) => {
        let lfToggleIndex = -1;

        lfTodo.forEach((lfT, index) => {
          if (lfT.id === id) {
            lfToggleIndex = index;
          }
        });

        localforage.setItem(LF_STORE.TODO, [
          ...lfTodo.slice(0, lfToggleIndex),
          Object.assign({}, lfTodo[lfToggleIndex], { done: !lfTodo[lfToggleIndex].done }),
          ...lfTodo.slice(lfToggleIndex + 1),
        ]);
      }, (err) => {
        console.warn('Unable to sync with LF', err);
      });
  };
}

function edit({ index, task, time, coordinate }) {
  return {
    type: TODO_EDIT,
    payload: {
      index,
      task,
      coordinate,
      time,
    },
  };
}

function editAsync(id, task) {
  return (dispatch, getState) => {
    let toggleIndex = -1;

    getState().todo.forEach((todo, index) => {
      if (todo.id === id) {
        toggleIndex = index;
      }
    });

    const todo = {
      index: toggleIndex,
      task,
      coordinate: getState().location,
      time: moment().format(),
    };

    dispatch(edit(todo));

    localforage
      .getItem(LF_STORE.TODO)
      .then((lfTodo) => {
        let lfEditIndex = -1;

        lfTodo.forEach((lfT, index) => {
          if (lfT.id === id) {
            lfEditIndex = index;
          }
        });

        localforage.setItem(LF_STORE.TODO, [
          ...lfTodo.slice(0, lfEditIndex),
          Object.assign({}, lfTodo[lfEditIndex], {
            task: todo.task,
            time: todo.time,
            coordinate: todo.coordinate,
          }),
          ...lfTodo.slice(lfEditIndex + 1),
        ]);
      }, (err) => {
        console.warn('Unable to sync with LF', err);
      });
  };
}

module.exports = {
  bootTodo,
  bootTodoAsync,
  add,
  addAsync,
  edit,
  editAsync,
  remove,
  removeAsync,
  toggle,
  toggleAsync,
};
