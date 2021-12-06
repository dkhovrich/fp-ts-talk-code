import {ReadonlyRecord} from "fp-ts/ReadonlyRecord";

const arr: readonly number[] = [1, 2, 3];

arr.push(4); // TS2551: Property 'push' does not exist on type 'readonly number[]'
arr.pop(); // TS2551: Property 'pop' does not exist on type 'readonly number[]'.
arr.unshift(); // TS2551: Property 'unshift' does not exist on type 'readonly number[]'.
arr.shift(); // TS2551: Property 'shift' does not exist on type 'readonly number[]'
arr.splice(1); // TS2551: Property 'splice' does not exist on type 'readonly number[]'