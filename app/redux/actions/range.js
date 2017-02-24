/* eslint no-console: 0 */

import localforage from 'localforage';

import { RANGE } from 'App/redux/constants/range.js';
import { LF_STORE } from 'App/config/localforage.js';

function bootRange(r) {
  return {
    type: RANGE,
    payload: {
      range: r,
    },
  };
}

function bootRangeAsync() {
  return (dispatch) => {
    localforage
      .getItem(LF_STORE.RANGE)
      .then((lfRange) => {
        dispatch(bootRange(lfRange === null ? 100 : lfRange));
      }, (err) => {
        console.warn('Unable to boot from LF', err);
      });
  };
}

function range(r) {
  return {
    type: RANGE,
    payload: {
      range: r,
    },
  };
}

function rangeAsync(r) {
  return (dispatch) => {
    dispatch(range(r));

    localforage
      .setItem(LF_STORE.RANGE, r)
      .then(null, (err) => {
        console.warn('Unable to sync with LF', err);
      });
  };
}

module.exports = {
  bootRange,
  bootRangeAsync,
  range,
  rangeAsync,
};
