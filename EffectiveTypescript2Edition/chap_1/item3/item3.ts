interface Square {
  width: number;
}
interface Rectangle extends Square {
  height: number;
}
type Shape = Square | Rectangle;

/**
 * 
 * @param shape interface
 * @returns throw an error because we have merged Rectange (compile mode) with instanceof (runtime mode) 
 */
function calculateArea(shape: Shape) {
  if (shape instanceof Rectangle) {
    return shape.height * shape.width;
  } else {
    return shape.width * shape.width;
  }
}
