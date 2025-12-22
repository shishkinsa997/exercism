//
// This is only a SKELETON file for the 'BookStore' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
const PRICE = 8;
export const cost = (books) => {
  let amount = [];
  let count = 0;
  let copy = [];
  let sum = 0;

  for (let i = 1; i <= 5; i++) {
    amount.push(books.filter((x) => x === i).length);
  }
  while (amount.some((x) => x > 0)) {
    amount = amount.map((x) => {
      if (x > 0) {
        ++count;
        return --x;
      }
      return x;
    });

    switch (count) {
      case 1:
        sum += 8
        break;
      case 2:
        sum += 8 * 0.95 * 2;
        break;
      case 3:
        sum += 8 * 0.90 * 3;
        break;
      case 4:
        sum += 8 * 0.80 * 4;
        break;
      case 5:
        sum += 8 * 0.75 * 5;
        break;
      default:
        sum += 0;
    }
    count = 0
  }
  return sum * 100;
};
