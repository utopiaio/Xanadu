import { RANGE } from 'App/redux/constants/range.js';

function reducer(state = 100, action) {
  switch (action.type) {
    case RANGE:
      return action.payload.range;

    default:
      return state;
  }
}

module.exports = reducer;
