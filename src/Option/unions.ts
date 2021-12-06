import {User} from "../types";

type Success<T> = { readonly type: "success"; readonly value: T; }

type Fail = { readonly type: "fail"; readonly error: Error; }

type Result<T> = Success<T> | Fail;

declare function loadUsers(): Result<readonly User[]>;

const result = loadUsers();

console.log(result.value); // Property 'value' does not exist on type 'Result<readonly User[]>'
console.log(result.error); // Property 'error' does not exist on type 'Result<readonly User[]>'

switch (result.type) {
    case "success":
        console.log(result.value);
        break;
    case "fail":
        console.log(result.error);
        break;
    default:
        absurd(result);
}
