import {createUsers} from "../data";
import {constant, pipe} from "fp-ts/function";
import * as O from "fp-ts/Option";
import * as A from "fp-ts/ReadonlyArray";
import {byEmail, createFullName} from "../types";
import {stringHash} from "../string-utils";

const users = createUsers();

const optionalUser = pipe(
    users,
    A.findFirst(byEmail("spider-man@gmail.com"))
);

console.log(optionalUser); // Option<User> -> { _tag: 'Some', value: { id: 1, email: "spiderman@gmail.com" } }

const optionalFullName = pipe(optionalUser, O.map(createFullName));

console.log(optionalFullName); // Option<string> -> { _tag: 'Some', value: 'Peter Parker' }

const hero = pipe(
    users,
    A.findFirst(byEmail("spider-man@gmail.com")),
    O.map(createFullName)
);

console.log(hero); // Option<string> -> { _tag: 'Some', value: 'Peter Parker' }

const girl = pipe(
    users,
    A.findFirst(byEmail("marry-watson@gmail.com")),
    O.map(createFullName)
);

console.log(girl); // Option<string> -> { _tag: 'None' }

const result = pipe(
    users,
    A.findFirst(byEmail("spider-man@gmail.com")),
    O.map(createFullName),
    O.toUndefined
);

console.log(result); // string -> Peter Parker

const result1 = pipe(
    users,
    A.findFirst(byEmail("iron-man@gmail.com")),
    O.map(createFullName),
    O.getOrElse(constant("Proof That Tony Stark Has A Heart"))
)

console.log(result1); // Proof That Tony Stark Has A Heart

const fullNameHash = pipe(
    users,
    A.findFirst(byEmail("spiderman@gmail.com")),
    O.map(createFullName),
    O.map(stringHash)
);

console.log(fullNameHash); // Option<number> -> { _tag: 'Some', value: -1021137173 }