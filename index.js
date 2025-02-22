class Polygon {
    constructor(sides) {
      this.sides = sides;
    }
  
    get countSides() {
      return this.sides.length;
    }
  
    get perimeter() {
      return this.sides.reduce((sum, side) => sum + side, 0);
    }
}
  
class Triangle extends Polygon {
    get isValid() {
      if (this.countSides !== 3) {
        return false;
      }
      const [side1, side2, side3] = this.sides;
      return side1 + side2 > side3 && side2 + side3 > side1 && side1 + side3 > side2;
    }
}
  
class Square extends Polygon {
    get isValid() {
      if (this.countSides !== 4) {
        return false;
      }
      const [side1, side2, side3, side4] = this.sides;
      return side1 === side2 && side2 === side3 && side3 === side4;
    }
  
    get area() {
      if (!this.isValid) {
        return "Invalid square";
      }
      const side = this.sides[0];
      return side * side;
    }
}
const triangle = new Triangle([3, 4, 5]);
console.log(triangle.isValid);
console.log(triangle.countSides);
console.log(triangle.perimeter);
  
const square = new Square([4, 4, 4, 4]);
console.log(square.isValid);
console.log(square.countSides);
console.log(square.perimeter);
console.log(square.area);
  