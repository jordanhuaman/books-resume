// ITem 3
// Type Operations Cannot Affect Runtime Values
function asNumber(value) {
    return value;
}
// Solution
function asNumber2(value) {
    return Number(value);
}
var value = asNumber("123");
console.log(value);
var value2 = asNumber2("1w23");
console.log(value2);
