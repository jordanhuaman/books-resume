// Item 4: Get Comfortable with Structural Typing
// TypeScript's type system is structural, which means that types are compatible if their members are compatible, regardless of their names. This allows for greater flexibility and code reuse, but it can also lead to unexpected behavior if you're not careful. In this item, we'll explore how structural typing works in TypeScript and how to use it effectively.

interface Vector2D {
  x: number;
  y: number;
}

interface Vector3D {
  x: number;
  y: number;
  z: number;
}

function normalize(v: Vector3D){
  const lenght = calculateLength(v);
  console.log(lenght)
  return {
    x: v.x / lenght,
    y: v.y / lenght,
    z: v.z / lenght
  }
}

// ❌ This function will fail if we pass a 3d vector because it has an extra property that is not compatible with Vector2D
function calculateLength(v: Vector2D) {
  return Math.sqrt(v.x ** 2 + v.y ** 2);
}

// ❌This function will fail if we pass a 4d vector because it has an extra property that is not compatible with Vector2D
function calculateLengthL1(v: Vector3D) {
  let lenght = 0;
  for (const axis of Object.keys(v)) {
    const coord = v[axis as keyof Vector3D];
  }
}
// ✅ This function will work with any vector that has x, y, and z properties, regardless of its name or other properties it may have
function calculateLengthL2(v: Vector3D) {
return Math.abs(v.x) + Math.abs(v.y) + Math.abs(v.z);
}

interface NamedVector {
  name: string;
  x: number;
  y: number;
}

// const v: NamedVector = { name: 'point', x: 3, y: 4 };
// console.log(calculateLength(v));
console.log(normalize({x:3, y:4, z:5}));

function openfuntion(x: number, y: number) {
  console.log(x, y);
}