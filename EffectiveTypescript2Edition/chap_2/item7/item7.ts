// Item 7: Think of Types as Sets of Values
// Smallest set
const x:never = 12;

//Single values
type A = 'A';
type B = 'B';
type Twelve = 12;
type AB = 'A' | 'B';
type AB12 = 'A' | 'B' | 12;

// member of or subset of
const aa: AB = 'A';
const cc: AB = 'C';

// one set it a subset of another
declare let twelve: AB12;
const back: AB = twelve;