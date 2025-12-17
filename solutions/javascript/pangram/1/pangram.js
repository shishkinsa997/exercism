//
// This is only a SKELETON file for the 'Pangram' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

import { is } from "core-js/core/object";

export const isPangram = (str) => {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  return [...alphabet].every((l) => [...str].includes(l))
};

console.log(isPangram('abcdefghijklmnopqrstuvwxyz'))