import {absurd} from "fp-ts/function";

export type None = {
    readonly _tag: 'None';
};

export type Some<A> = {
    readonly _tag: 'Some';
    readonly value: A;
};

export type Option<A> = None | Some<A>;

type OptionMap = <A, B>(f: (a: A) => B) => (fa: Option<A>) => Option<B>;

const map: OptionMap = f => option => {
    switch (option._tag) {
        case "None":
            return option;
        case "Some":
            return {_tag: "Some", value: f(option.value)};
        default:
            return absurd(option)
    }
}

type OptionChain = <A, B>(f: (a: A) => Option<B>) => (fa: Option<A>) => Option<B>;

const chain: OptionChain = f => option => {
    switch (option._tag) {
        case "None":
            return option;
        case "Some":
            return f(option.value);
        default:
            return absurd(option)
    }
}