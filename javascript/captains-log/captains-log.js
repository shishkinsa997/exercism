// @ts-check

/**
 * Generates a random starship registry number.
 *
 * @returns {string} the generated registry number.
 */
export function randomShipRegistryNumber() {
  return 'NCC-' + Math.ceil(Math.random() * (9999 - 1000) + 1000);
}

/**
 * Generates a random stardate.
 *
 * @returns {number} a stardate between 41000 (inclusive) and 42000 (exclusive).
 */
export function randomStardate() {
  // return Math.random() * (42000.0 - 41000.0) + 41000.0;
  return 41000 + Math.random() * 1000
}

/**
 * Generates a random planet class.
 *
 * @returns {string} a one-letter planet class.
 */
export function randomPlanetClass() {
  const list = 'DHJKLMNRTY'
  return list[Math.round(Math.random() * (list.length - 1))];
}
