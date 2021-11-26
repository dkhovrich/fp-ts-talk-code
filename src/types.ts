export type UserId = number;

export type User = {
    readonly id: UserId;
    readonly email: string;
    readonly firstName: string;
    readonly lastName: string;
}

export type CommentId = number;

export type Comment = {
    readonly id: CommentId;
    readonly userId: UserId;
    readonly text: string;
}

export const createFullName = (user: User): string => `${user.firstName} ${user.lastName}`;

export const byEmail = (email: string) => (user: User): boolean => user.email === email;