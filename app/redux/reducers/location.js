import { LOCATION_UPDATE } from 'App/redux/constants/location.js';

function reducer(state = {}, action) {
  switch (action.type) {
    case LOCATION_UPDATE:
      return action.payload;

    default:
      return state;
  }
}

module.exports = reducer;
