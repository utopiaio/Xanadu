/* global window */
/* eslint no-console: 0 */

import { LOCATION_UPDATE } from 'App/redux/constants/location.js';

function location(payload) {
  return {
    type: LOCATION_UPDATE,
    payload,
  };
}

function watchLocation() {
  return (dispatch) => {
    window.navigator.geolocation.watchPosition((position) => {
      const { accuracy, longitude, latitude } = position.coords;

      dispatch(location({
        accuracy,
        longitude,
        latitude,
      }));
    });
  };
}

module.exports = {
  location,
  watchLocation,
};
