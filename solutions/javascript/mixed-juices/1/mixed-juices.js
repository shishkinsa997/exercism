// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

/**
 * Determines how long it takes to prepare a certain juice.
 *
 * @param {string} name
 * @returns {number} time in minutes
 */
export function timeToMixJuice(name) {
  const time = {
    "Pure Strawberry Joy": 0.5,
    Energizer: 1.5,
    "Green Garden": 1.5,
    "Tropical Island": 3,
    "All or Nothing": 5,
  };
  // @ts-ignore
  const res = time[name] ?? 2.5;

  return res;
}

/**
 * Calculates the number of limes that need to be cut
 * to reach a certain supply.
 *
 * @param {number} wedgesNeeded
 * @param {string[]} limes
 * @returns {number} number of limes cut
 */
export function limesToCut(wedgesNeeded, limes) {
  const lime = {
    small: 6,
    medium: 8,
    large: 10,
  };
  let res = 0;
  let i = 0;
  while (res < wedgesNeeded) {
    if (i === limes.length) {
      break;
    }
    // @ts-ignore
    res += lime[limes[i]];
    i++;
  }
  return i;
}

/**
 * Determines which juices still need to be prepared after the end of the shift.
 *
 * @param {number} timeLeft
 * @param {string[]} orders
 * @returns {string[]} remaining orders after the time is up
 */
export function remainingOrders(timeLeft, orders) {
  const time = {
    "Pure Strawberry Joy": 0.5,
    Energizer: 1.5,
    "Green Garden": 1.5,
    "Tropical Island": 3,
    "All or Nothing": 5,
  };
  let i = 0;
  while (timeLeft > 0) {
    // @ts-ignore
    timeLeft -= time[orders[i]] ?? 2.5;
    orders.splice(i, 1)
  }
  return orders;
}
