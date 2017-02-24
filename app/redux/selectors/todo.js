import { createSelector } from 'reselect';

import haversine from 'App/util/haversine.js';

// this selector will come in handy when theme & language are added...
// eslint-disable-next-line
const currentTodo = createSelector([state => state.todo, state => state.location, state => state.range], (todos, location, range) => {
  return todos.filter(todo => haversine(todo.coordinate, location) <= range);
});

module.exports = {
  currentTodo,
};
