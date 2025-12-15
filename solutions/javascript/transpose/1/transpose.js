//
// This is only a SKELETON file for the 'Transpose' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const transpose = (matrix) => {
  const news = [];
  const rows = matrix.length;
  let columns = []
  for (let str of matrix) {
    columns.push(str.length)
  }
  columns = Math.max(...columns)
  let maxlength = Math.max(rows, columns)
  for (let j = 0; j < maxlength; j++) {
    let line = '';
    for (let i = 0; i < rows; i ++) {
      line = line.replace(line, `${line}${matrix[i][j] || ''}`)
    }
    news.push(line)
  }
  return news
};

