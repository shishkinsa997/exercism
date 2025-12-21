//
// This is only a SKELETON file for the 'Collatz Conjecture' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
let count = 0
export const steps = (n) => {
  if (n < 1) throw new Error('Only positive numbers are allowed');
  if (n === 1) return count;
  count++
  if (n % 2 === 0) {
    steps(n / 2);
  } else steps(n * 3 + 1)
};
