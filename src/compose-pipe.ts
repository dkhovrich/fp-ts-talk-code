import {pipe} from "fp-ts/function";
import {sum, multiply} from "./curry-functions";
import {valueToString} from "./string-utils";

const value = 2;
const result = pipe(value, sum(2), multiply(3), valueToString);

console.log(result); // Value: 12