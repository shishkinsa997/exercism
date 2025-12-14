//
// This is only a SKELETON file for the 'Pascals Triangle' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const rows = (r) => {
  const arr = [];
  for (let i = 0; i < r; i++) {
    let num = 1;
    const line = [num];
    for (let j = 0; j < i; j++) {
      line.push((arr[i - 1][j + 1] || 0) + (arr[i - 1][j] || 0));
    }
    arr.push(line);
  }
  return arr;
};
