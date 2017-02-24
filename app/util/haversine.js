// eslint-disable-next-line
const rad = x => x * Math.PI / 180;

/**
 * given two coordinates returns the distance in meters using Haversine
 *
 * @param {Object} p1 point 1
 * @param {Number} p1.longitude
 * @param {Number} p1.latitude
 * @param {Object} p2 point 2
 * @param {Number} p2.longitude
 * @param {Number} p2.latitude
 * @return {Number}
 */
module.exports = (p1, p2) => {
  const R = 6378137; // Earth’s mean radius in meter
  const dLat = rad(p2.latitude - p1.latitude);
  const dLong = rad(p2.longitude - p1.longitude);
  // eslint-disable-next-line
  const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) + Math.cos(rad(p1.latitude)) * Math.cos(rad(p2.latitude)) * Math.sin(dLong / 2) * Math.sin(dLong / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
};
