//
// This is only a SKELETON file for the 'BookStore' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
const PRICE = 8;
export const cost = (books) => {
  let amount = [];
  let count = 0;
  let sum = 0;
  let groups = [];

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

    groups.push(count);
    count = 0;
  }

  while (groups.includes(5) && groups.includes(3)) {
    const index5 = groups.indexOf(5);
    const index3 = groups.indexOf(3);
    groups.splice(index5, 1);
    groups.splice(index3, 1);
    groups.push(4, 4);
  }

  groups.forEach((count) => {
    switch (count) {
      case 1:
        sum += PRICE;
        break;
      case 2:
        sum += PRICE * 0.95 * 2;
        break;
      case 3:
        sum += PRICE * 0.9 * 3;
        break;
      case 4:
        sum += PRICE * 0.8 * 4;
        break;
      case 5:
        sum += PRICE * 0.75 * 5;
        break;
    }
  });

  return Math.round(sum * 100);
};
