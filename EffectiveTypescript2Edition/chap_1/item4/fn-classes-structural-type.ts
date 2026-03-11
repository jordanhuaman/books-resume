class SmallNumContainer {
  num: number;
  constructor(num: number) {
    if (num < 0 || num >= 10) {
      throw new Error(`You gave me ${num} but I want something 0-9.`)
    }
    this.num = num;
  }
}

// Why a and b work? 
// Because TypeScript's structural typing system allows for compatibility between types based on their structure rather than their names. In this case, both the class SmallNumContainer and the object literal { num: 2024 } have the same structure (a single property num of type number), so they are considered compatible. This means that you can assign an instance of SmallNumContainer to a variable of type SmallNumContainer, and you can also assign an object literal with the same structure to a variable of type SmallNumContainer without any issues.
const a = new SmallNumContainer(5);
const b: SmallNumContainer = { num: 2024};