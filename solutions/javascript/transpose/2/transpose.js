//
// This is only a SKELETON file for the 'Transpose' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const transpose = (matrix) => {
  const news = [];
  const rows = matrix.length;

  let columns = 0;
  for (let str of matrix) {
    if (str.length > columns) {
      columns = str.length;
    }
  }

  for (let j = 0; j < columns; j++) {
    let line = '';
    for (let i = 0; i < rows; i++) {
      if (j < matrix[i].length) {
        line += matrix[i][j];
      } else {
        line += ' ';
      }
    }
    news.push(line);
  }

  return news;
};
