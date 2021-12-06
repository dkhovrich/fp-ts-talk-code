import { v4 as uuid } from 'uuid';

type User = {
    readonly id: string;
    readonly email: string;
};

// declare function createUser(email: string): User;

function createUser(email: string): User {
    if (email.length > 256) {
        throw new Error("Email is too long!");
    }

    if (!email.includes("@")) {
        throw new Error("Email is invalid!")
    }

    return { id: uuid(), email};
}