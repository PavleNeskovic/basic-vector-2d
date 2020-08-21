export default class Vector {
  static readonly EPSILON = 0.00000001;
  x: number;
  y: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }

  add(vector: Vector) : Vector {
    return new Vector(this.x + vector.x, this.y + vector.y);
  }

  subtract(vector: Vector) : Vector {
    return new Vector(this.x - vector.x, this.y - vector.y);
  }

  scaleBy(num: number) : Vector{
    return new Vector(this.x * num, this.y * num);
  }

  length() : number{
    return Math.hypot(this.x, this.y);
  }

  dotProduct(vector: Vector) : number{
    return this.x * vector.x + this.y * vector.y;
  }

  normalize() : Vector{
    return this.scaleBy(1 / this.length());
  }

  haveSameDirectionWith(vector: Vector) : boolean {
    const dotProduct = this.normalize().dotProduct(vector.normalize());
    return this.areEqual(dotProduct, 1);
  }

  haveOppositeDirectionTo(vector: Vector) : boolean {
    const dotProduct = this.normalize().dotProduct(vector.normalize());
    return this.areEqual(dotProduct, -1);
  }

  isPerpendicularTo(vector: Vector) : boolean {
    const dotProduct = this.normalize().dotProduct(vector.normalize());
    return this.areEqual(dotProduct, 0);
  }

  private areEqual(one: number, other: number, epsilon = Vector.EPSILON) : boolean {
    return Math.abs(one - other) < epsilon;
  }
}
