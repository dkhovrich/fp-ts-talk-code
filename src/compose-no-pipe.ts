import {multiply, sum} from "./functions";
import {valueToString} from "./string-utils";

const value = 2;
const valueAfterSum = sum(value, 2);
const valueAfterMultiply = multiply(valueAfterSum, 3);
const valueString = valueToString(valueAfterMultiply);

console.log(valueString); // Value: 12

const result = valueToString(multiply(sum(value, 2), 3));
console.log(result); // Value: 12

export {};