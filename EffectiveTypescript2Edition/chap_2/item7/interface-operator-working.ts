// The extends operator means that we add more properties to an existing type.

interface NullyStudent {
  name: string;
  ageYears: number | null;
}
interface Student extends NullyStudent {
  ageYears: null;
}

const student: Student = { ageYears: null, name: 'John' };

// Vector 3 is a subtype or subclass of Vector 2
interface Vector1D { x: number; }
interface Vector2D extends Vector1D { y: number; }
interface Vector3D extends Vector2D { z: number; }

const v3: Vector3D = { x: 1, y: 2, z: 3 };

// more advance
function getKey<k extends string>(val: any, key: k) { }
getKey({}, 'name');
getKey({}, '1');

// [number, number] is not a subtype of number[] because it has a fixed length and specific types for each element, while number[] can have any length and all elements must be of type number.
const list = [1,2]
const tuple: [number, number] = [1,2];

// this still doenst work because tuple store a structure like this: { 0: number; 1: number; length: 2; }}
const tiple: [number, number, number] = [1, 2,3];
const double: [number, number] = tiple;