// Solution 1
/**
 * @param shape interface
 * @returns always return an area because we use "in" operator to check the property of object
 */
function calculateArea2(shape: Shape) {
  if ("height" in shape) {
    return shape.height * shape.width;
  } else {
    return shape.width * shape.width;
  }
}

// Solution 2 
/**
 * <p>Tagged union or Discriminated union</p>
 */
interface SquareS {
  kind: 'square';
  width: number;
}
interface RectangleS {
  kind: 'rectangle';
  height: number;
  width: number;
}
type ShapeS = SquareS | RectangleS;
function calculateArea3(shape: ShapeS) {
  if (shape.kind === 'rectangle') {
    return shape.height * shape.width;
  }
  else {
    return shape.width * shape.width;
  }
}

// Solution 3
/**
 * <p>Class with type guard</p>
 */
class Square{
  width: number;
  constructor(width: number) {
    this.width = width;
  }
}

class Rectangle extends Square{
  height: number;
  constructor(width: number, height: number) {
    super(width);
    this.height = height;
  }
}
type ShapeC = Square | Rectangle;
function calculateArea4(shape: ShapeC) {
  if (shape instanceof Rectangle) {
    return shape.height * shape.width;
  } else {
    return shape.width * shape.width;
  }
}