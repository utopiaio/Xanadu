/* global window */
/* eslint no-console: 0 */

// middleware that sets logs to notification
import haversine from 'App/util/haversine.js';

// you gotta love the closure/curry that's happening here 😍
const notificationLogger = store => next => (action) => {
  const result = next(action);

  if (window.cordova) {
    window.cordova.plugins.notification.badge.hasPermission(() => {
      const { range, todo, location } = store.getState();
      const currentBadgeCount = todo.filter(t => haversine(t.coordinate, location) <= range).length;

      if (currentBadgeCount === 0) {
        window.cordova.plugins.notification.badge.clear();
      } else {
        window.cordova.plugins.notification.badge.set(currentBadgeCount);
      }
    });
  }

  return result;
};

module.exports = notificationLogger;
