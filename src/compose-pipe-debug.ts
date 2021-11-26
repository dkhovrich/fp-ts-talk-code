import {pipe} from "fp-ts/function";
import {multiply, sum} from "./curry-functions";
import {valueToString} from "./string-utils";
import {debug} from "./debug";

const value = 2;
const result = pipe(
    value,
    sum(2),
    debug("after sum"), // DEBUG:after sum : 4
    multiply(3),
    debug("after multiply"), // DEBUG:after multiply : 12
    valueToString
);

console.log(result); // Value: 12