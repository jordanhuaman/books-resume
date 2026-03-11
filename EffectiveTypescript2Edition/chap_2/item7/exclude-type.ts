type T = Exclude<string|Date, string|number>;

type NonZeroNums = Exclude<number, 0>;

const a2: NonZeroNums = 0;