import {byEmail} from "./types";
import {createUsers} from "./data";

export const sum = (a: number) => (b: number): number => a + b;

export const multiply = (a: number) => (b: number): number => a * b;

// console.log(sum(2)(2));

const users = createUsers();

const user = users.find(byEmail("peter-parker@gmail.com"));

// console.log(user);

export {};