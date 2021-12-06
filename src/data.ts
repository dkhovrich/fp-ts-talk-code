import {User, Comment, CommentId} from "./types";

export const createUsers = (): readonly User[] => [
    {id: "1", email: "spider-man@gmail.com", firstName: "Peter", lastName: "Parker"},
    {id: "2", email: "goblin@gmail.com", firstName: "Norman", lastName: "Osborn"},
    {id: "3", email: "octopus@gmail.com", firstName: "Otto", lastName: "Octavius"},
];

export const createComments = (): Record<CommentId, readonly Comment[]> => ({
    [1]: [{ userId: "1", text: "With great power comes great responsibility"}]
});