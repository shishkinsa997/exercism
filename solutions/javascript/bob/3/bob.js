//
// This is only a SKELETON file for the 'Bob' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const hey = (m) => {
  m = m.trim()
  if (m === '') return 'Fine. Be that way!';
  if (m === m.toUpperCase() && m.at(-1) === '?' && /[A-z]/.test(m)) return "Calm down, I know what I'm doing!";
  if (m.at(-1) === '?') return 'Sure.';
  if (m === m.toUpperCase() && /[A-z]/.test(m)) return 'Whoa, chill out!';
  return 'Whatever.'
};
