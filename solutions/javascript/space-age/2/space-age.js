//
// This is only a SKELETON file for the 'Space Age' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
export const PERIODS = {
  mercury: 0.2408467,
  venus: 0.61519726,
  earth: 1.0,
  mars: 1.8808158,
  jupiter: 11.862615,
  saturn: 29.447498,
  uranus: 84.016846,
  neptune: 164.79132,
};
export const age = (planet, seconds) => {
  try {
    const mul = PERIODS[planet];
    const earthYears = seconds / 60 / 60 / 24 / 365.25;
    return Number((earthYears / mul).toFixed(2));
  } catch {
    throw new Error('not a planet')
  }
};
