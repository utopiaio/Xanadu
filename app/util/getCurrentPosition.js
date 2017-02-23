/* global window */
/* eslint no-console: 0 */
import { PositionOptions } from 'App/config/geolocation.js';

module.exports = new Promise((resolve, reject) => {
  window.navigator.geolocation.getCurrentPosition((location) => {
    resolve(location.coords);
  }, (err) => {
    reject(err);
  }, PositionOptions);
});
