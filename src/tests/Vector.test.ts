import Vector from '../Vector';

test('Add two vectors', () => {
  const vec1 = new Vector(2, 2);
  const vec2 = new Vector(1, 3);
  const vecResult = new Vector(3, 5);
  expect(vec1.add(vec2)).toEqual(vecResult);
});

test('Subtract two vectors', () => {
  const vec1 = new Vector(2, 2);
  const vec2 = new Vector(1, 3);
  const vecResult = new Vector(1, -1);
  expect(vec1.subtract(vec2)).toEqual(vecResult);
});

test('Scale vector', () => {
  const vec1 = new Vector(2, 2);
  const scaleFactor = 2;
  const vecResult = new Vector(4, 4);
  expect(vec1.scaleBy(scaleFactor)).toEqual(vecResult);
});

test('Calculate length', () => {
  const vec1 = new Vector(3, 4);
  expect(vec1.length()).toEqual(5);
});

test('Calculate dot product', () => {
  const vec1 = new Vector(2, 2);
  const vec2 = new Vector(1, 3);
  expect(vec1.dotProduct(vec2)).toEqual(8);
});

test('Normalize', () => {
  const vec1 = new Vector(2, 4);
  const vecResult = new Vector(0.4472135954999579, 0.8944271909999159);
  expect(vec1.normalize()).toEqual(vecResult);
});

test('Vectors have the same direction', () => {
  const vec1 = new Vector(2, 4)
  const vec2 = new Vector(4, 8)
  expect(vec1.haveSameDirectionWith(vec2)).toBe(true);
});

test('Vectors have the opposite direction', () => {
  const vec1 = new Vector(2, 4)
  const vec2 = new Vector(-4, -8)
  expect(vec1.haveOppositeDirectionTo(vec2)).toBe(true);
});

test('Vectors are perpendicular', () => {
  const vec1 = new Vector(-2, 2)
  const vec2 = new Vector(2, 2)
  expect(vec1.isPerpendicularTo(vec2)).toBe(true);
});
