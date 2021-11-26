export const sum = (a: number) => (b: number): number => a + b;

export const multiply = (a: number) => (b: number): number => a * b;

// console.log(sum(2)(2));

type User = {
    id: number;
    email: string;
}

const byEmail = (email: string) => (user: User): boolean => user.email === email;

const users: readonly User[] = [{
    id: 1,
    email: "peter-parker@gmail.com"
}];

const user = users.find(byEmail("peter-parker@gmail.com"));

// console.log(user);

export {};