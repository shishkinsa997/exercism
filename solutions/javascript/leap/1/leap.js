//
// This is only a SKELETON file for the 'Leap' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const isLeap = (num) => {
  if (num % 400 === 0) return true;
  if (num % 100 === 0) return false;
  if (num % 4 === 0) return true;
  return false;
};
