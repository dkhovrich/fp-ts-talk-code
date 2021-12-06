import {createUsers} from "../data";
import {pipe} from "fp-ts/function";
import {byEmail, User} from "../types";

const users = createUsers();

declare function createFullName(user: User): string;

// TS2345: Argument of type 'User | undefined' is not assignable to parameter of type 'User'
// Type 'undefined' is not assignable to type 'User'.
const result = pipe(
    users.find(byEmail("spider-man@gmail.com")),
    createFullName
);