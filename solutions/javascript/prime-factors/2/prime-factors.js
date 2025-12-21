//
// This is only a SKELETON file for the 'Prime Factors' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const primeFactors = (n, divisor = 2, arr = []) => {
  if (n <= 1) return arr;
  if (divisor === 2) {
    while (n % 2 === 0) {
      arr.push(2);
      n = n / 2;
    }
    divisor = 3;
  }
  while (divisor * divisor <= n) {
    if (n % divisor === 0) {
      arr.push(divisor);
      return primeFactors(n / divisor, divisor, arr);
    }
    divisor += 2;
  }
  if (n > 1) {
    arr.push(n);
  }
  return arr;
};

console.log(primeFactors(93819012551))