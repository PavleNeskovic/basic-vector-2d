export default class Vector {
  static readonly EPSILON = 0.00000001;
  x: number;
  y: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }

  add(vector: Vector) {
    return new Vector(this.x + vector.x, this.y + vector.y);
  }

  subtract(vector: Vector) {
    return new Vector(this.x - vector.x, this.y - vector.y);
  }

  scaleBy(num: number) {
    return new Vector(this.x * num, this.y * num);
  }

  length() {
    return Math.hypot(this.x, this.y);
  }

  dotProduct(vector: Vector) {
    return this.x * vector.x + this.y * vector.y;
  }

  normalize() {
    return this.scaleBy(1 / this.length());
  }

  haveSameDirectionWith(vector: Vector) {
    const dotProduct = this.normalize().dotProduct(vector.normalize());
    return this.areEqual(dotProduct, 1);
  }

  haveOppositeDirectionTo(vector: Vector) {
    const dotProduct = this.normalize().dotProduct(vector.normalize());
    return this.areEqual(dotProduct, -1);
  }

  isPerpendicularTo(vector: Vector) {
    const dotProduct = this.normalize().dotProduct(vector.normalize());
    return this.areEqual(dotProduct, 0);
  }

  private areEqual(one: number, other: number, epsilon = Vector.EPSILON) {
    return Math.abs(one - other) < epsilon;
  }
}
