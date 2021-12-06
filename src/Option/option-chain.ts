import { Comment } from "../types";
import {createComments, createUsers} from "../data";
import {constant, pipe} from "fp-ts/function";
import * as O from "fp-ts/Option";
import * as A from "fp-ts/ReadonlyArray";
import * as R from "fp-ts/Record";
import {byEmail} from "../types";

const users = createUsers();

const comments = createComments();

// Option<Option<readonly Comment[]>>
const a = pipe(
    users,
    A.findFirst(byEmail("spider-man@gmail.com")),
    O.map(user => R.lookup(user.id, comments))
)

console.log(a); // { _tag: 'Some', value: { _tag: 'Some', value: [ [Object] ] } }

// Option<readonly Comment[]>
const b = pipe(
    users,
    A.findFirst(byEmail("spider-man@gmail.com")),
    O.chain(user => R.lookup(user.id, comments))
);

console.log(b); // { _tag: 'Some', value: [ [Object] ] }

// readonly Comment[]
const c = pipe(
    users,
    A.findFirst(byEmail("spider-man@gmail.com")),
    O.chain(user => R.lookup(user.id, comments)),
    O.getOrElse(constant<readonly Comment[]>([]))
)

console.log(c); // [{ userId: '1', text: 'With great power comes great responsibility' }]