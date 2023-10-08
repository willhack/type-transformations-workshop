import { Tuple } from "ts-toolbelt";

type NonEmptyArray<T> = [T, ...Array<T>];

export const makeEnum = (values: NonEmptyArray<string>) => {};

makeEnum(["a"]);
makeEnum(["a", "b", "c"]);

// @ts-expect-error
makeEnum([]);
