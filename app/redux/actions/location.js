/* global window */
/* eslint no-console: 0 */

import { PositionOptions } from 'App/config/geolocation.js';
import { LOCATION_UPDATE } from 'App/redux/constants/location.js';

function location(payload) {
  return {
    type: LOCATION_UPDATE,
    payload,
  };
}

function bootLocation() {
  return (dispatch) => {
    window.navigator.geolocation.getCurrentPosition((position) => {
      const { accuracy, longitude, latitude } = position.coords;

      dispatch(location({
        accuracy,
        longitude,
        latitude,
      }));
    }, (err) => {
      console.warn('Unable to lock on location', err);
    }, PositionOptions);
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
  bootLocation,
  location,
  watchLocation,
};
