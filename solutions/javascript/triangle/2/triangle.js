//
// This is only a SKELETON file for the 'Triangle' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Triangle {
  constructor(a, b, c) {
    this.a = a;
    this.b = b;
    this.c = c;
  }

  get isEquilateral() {
    return this.a === this.b && this.b === this.c && this.a !== 0;
  }

  get isIsosceles() {
    return this.a === this.b || this.b === this.c || this.a === this.c;
  }

  get isScalene() {
    return !isIsosceles()
  }
}
