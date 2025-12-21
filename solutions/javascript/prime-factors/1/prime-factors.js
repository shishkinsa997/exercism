//
// This is only a SKELETON file for the 'Prime Factors' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const primeFactors = (n, divisor = 2, arr = []) => {
  if (n <= 1) return arr;

  if (n % divisor === 0) {
    arr.push(divisor);
    return primeFactors(n / divisor, divisor, arr);
  }

  return primeFactors(n, divisor + 1, arr);
};
