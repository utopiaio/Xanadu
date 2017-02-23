import { RANGE } from 'App/redux/constants/range.js';

function range(r) {
  return {
    type: RANGE,
    payload: {
      range: r,
    },
  };
}

module.exports = {
  range,
};
