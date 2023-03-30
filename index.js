class Polygon {
  constructor(sides) {
    this.sides = sides;
  }
  get countSides() {
    return this.sides.length;
  }

  get perimeter() {
    return this.sides.reduce((a, b) => a + b, 0);
  }
}

class Triangle extends Polygon {
  constructor(props) {
    super(props);
  }
  get isValid() {
    if (this.countSides !== 3) {
      return false;
    } else {
      const [a, b, c] = this.sides;
      return a + b > c && a + c > b && b + c > a;
    }
  }
}

class Square extends Polygon {
  constructor(props) {
    super(props);
  }
  get isValid() {
    if (this.countSides !== 4) {
      return false;
    } else {
      for (let i = 0; i < this.sides.length; i++) {
        return this.sides[i] === this.sides[i + 1];
      }
    }
  }
  get area() {
    return this.sides[0] * this.sides[0];
  }
}

let square = new Square([10, 10, 10, 10]);
console.log(square.area);
