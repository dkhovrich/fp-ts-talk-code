import {User, Comment} from "./types";

export const createUsers = (): readonly User[] => [
    {id: 1, email: "spiderman@gmail.com", firstName: "Peter", lastName: "Parker"},
    {id: 2, email: "goblin@gmail.com", firstName: "Norman", lastName: "Osborn"},
    {id: 3, email: "octopus@gmail.com", firstName: "Otto", lastName: "Octavius"},
];

export const createComments = (): readonly Comment[] => [
    { id: 1, userId: 1, text: "With great power comes great responsibility" }
]