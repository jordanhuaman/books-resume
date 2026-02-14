// Item 5: Limit Use of the any Type

// Typescript is gradual and optional
// Optional because we can disable type checking for a variable by using the **any** type
let ageInYears:number;
ageInYears = 10; // OK

// Breack the contract of the type system
ageInYears = 'ten' as any;

ageInYears +=1;
console.log(ageInYears);