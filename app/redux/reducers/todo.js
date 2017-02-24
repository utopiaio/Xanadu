import { TODO_BOOT, TODO_ADD, TODO_EDIT, TODO_TOGGLE, TODO_REMOVE } from 'App/redux/constants/todo.js';

function reducer(state = [], action) {
  switch (action.type) {
    case TODO_BOOT:
      return action.payload.todos;

    case TODO_ADD: {
      return [Object.assign({}, action.payload, { done: false }), ...state];
    }

    case TODO_EDIT: {
      const todoEdit = state[action.payload.index];

      return [
        ...state.slice(0, action.payload.index),
        Object.assign({}, todoEdit, {
          task: action.payload.task,
          time: action.payload.time,
          coordinate: action.payload.coordinate,
        }),
        ...state.slice(action.payload.index + 1),
      ];
    }

    case TODO_TOGGLE: {
      const todoItem = state[action.payload.index];

      return [
        ...state.slice(0, action.payload.index),
        Object.assign({}, todoItem, { done: !todoItem.done }),
        ...state.slice(action.payload.index + 1),
      ];
    }

    case TODO_REMOVE:
      return [
        ...state.slice(0, action.payload.index),
        ...state.slice(action.payload.index + 1),
      ];

    default:
      return state;
  }
}

module.exports = reducer;
