/* global window */
/* eslint no-console: 0 */
import localforage from 'localforage';

import { TODO_BOOT, TODO_ADD, TODO_EDIT, TODO_TOGGLE, TODO_REMOVE } from 'App/redux/constants/todo.js';
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

function boot(todos) {
  return {
    type: TODO_BOOT,
    payload: {
      todos,
    },
  };
}

function bootAsync() {
  return (dispatch) => {
    localforage
      .getItem(LF_STORE.TODO)
      .then((lfTodo) => {
        dispatch(boot(lfTodo));
      }, (err) => {
        console.warn('Unable to boot from LF', err);
      });
  };
}

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

        localforage.setItem(LF_STORE.TODO, [
          ...lfTodo.slice(0, lfRemoveIndex),
          ...lfTodo.slice(lfRemoveIndex + 1),
        ]);
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
  };
}

function edit({ index, task, coordinate }) {
  return {
    type: TODO_EDIT,
    payload: {
      index,
      task,
      coordinate,
    },
  };
}

function editAsync(id, task) {
  return (dispatch, getState) => {
    const todos = getState().todo;
    let toggleIndex = -1;

    todos.forEach((todo, index) => {
      if (todo.id === id) {
        toggleIndex = index;
      }
    });

    getCurrentPosition.then((location) => {
      // I'm tempted to seal this _const_ object
      const todo = {
        index: toggleIndex,
        task,
        coordinate: location.coords,
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
            Object.assign({}, { id, task, coordinate: location.coords }),
            ...lfTodo.slice(lfEditIndex + 1),
          ]);
        }, (err) => {
          console.warn('Unable to sync with LF', err);
        });
    }, (err) => {
      console.warn('Unable to get location', err);
    });
  };
}

module.exports = {
  boot,
  bootAsync,
  add,
  addAsync,
  edit,
  editAsync,
  remove,
  removeAsync,
  toggle,
  toggleAsync,
};
