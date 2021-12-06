import {Option} from "fp-ts/Option";

interface Predicate<A> {
    (a: A): boolean
}

// Methods
declare function lookup(i: number): <A>(as: ReadonlyArray<A>) => Option<A>

declare function lookup<A>(i: number, as: ReadonlyArray<A>): Option<A>

declare function findFirst<A>(predicate: Predicate<A>): (as: ReadonlyArray<A>) => Option<A>

declare const head: <A>(as: readonly A[]) => Option<A>

declare const last: <A>(as: readonly A[]) => Option<A>

declare const updateAt: <A>(i: number, a: A) => (as: readonly A[]) => Option<readonly A[]>