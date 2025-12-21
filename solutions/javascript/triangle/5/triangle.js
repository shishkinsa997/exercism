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

  get isExist() {
    return this.a + this.b > this.c &&
      this.b + this.c > this.a &&
      this.a + this.c > this.b &&
      this.a > 0 && this.b > 0 && this.c > 0;
  }

  get isEquilateral() {
    return this.isExist && this.a === this.b && this.b === this.c;
  }

  get isIsosceles() {
    return this.isExist && (this.a === this.b || this.b === this.c || this.a === this.c);
  }

  get isScalene() {
    return this.isExist && !this.isIsosceles;
  }
}
