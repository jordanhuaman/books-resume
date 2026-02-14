// ITem 3
// 3.3 Type Operations Cannot Affect Runtime Values
function asNumber(value: string | number): number {
  return value as number;
}

// Solution
function asNumber2(value: string | number): number {
  return Number(value);
}

const value = asNumber("123");
console.log(value);

const value2 = asNumber2("1w23");
console.log(value2);