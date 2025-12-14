//
// This is only a SKELETON file for the 'Raindrops' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const convert = (n) => {
  const three = n % 3 ? '' : 'Pling';
  const five = n % 5 ? '' : 'Plang';
  const seven = n % 7 ? '' : 'Plong';
  const other = !three && !five && !seven ? `${n}` : '';
  return `${three}${five}${seven}${other}`
};
