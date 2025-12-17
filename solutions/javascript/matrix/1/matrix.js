//
// This is only a SKELETON file for the 'Matrix' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Matrix {
  constructor(str) {
    const matrix = str.split("\n").map((l) => l.split(" "));
    const arr = [];
    for (let i = 0; i < matrix[0].length; i++) {
      for (let j = 0; j < matrix.length; j++) {
        arr.push(matrix[j][i]);
      }
    }
    let reversed = []
    for (let i = 0; i < arr.length; i += matrix.length) {
      reversed.push(arr.slice(i, i + matrix.length));
    }
    this.matrix = matrix;
    this.reversed = reversed;
  }

  get rows() {
    return this.matrix.map((x) => x.map(Number));
  }

  get columns() {
    // console.log(this.reversed)
    return this.reversed.map((x) => x.map(Number));
  }
} 
