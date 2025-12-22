//
// This is only a SKELETON file for the 'Bob' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const hey = (m) => {
  if (m.trim() === '') return 'Fine. Be that way!';
  if (m === m.toUpperCase() || m.at(-1) === '?') return "Calm down, I know what I'm doing!";
  if (m.at(-1) === '?') return 'Sure.';
  if (m === m.toUpperCase()) return 'Whoa, chill out!';
  return 'Whatever.'
};
