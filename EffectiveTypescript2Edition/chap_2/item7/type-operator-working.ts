// The & operator create an intersection type, which combines multiple types into one. This means that the resulting type has all the properties of the combined types. 
// In contrast, the | operator creates a union type, which allows a value to be one of several types. The resulting type can have properties from any of the combined types, but it does not require all properties to be present.

interface Person {
  name: string;
}
interface Lifespan {
  name: string;
  birth: Date;
  death?: Date;
}
type PersonSpan = Person & Lifespan;
type PersonSpan2 =keyof ( Person | Lifespan);


const ps: PersonSpan = {
  name: 'John',
  birth: new Date('1990-01-01'),
};

const ps2 : PersonSpan2 = 'name';