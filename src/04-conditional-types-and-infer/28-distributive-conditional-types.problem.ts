import { Equal, Expect } from "../helpers/type-utils";

type Fruit = "apple" | "banana" | "orange";

type AppleOrBanana = Exclude<Fruit, "orange"> extends infer T ? T : never;

type tests = [Expect<Equal<AppleOrBanana, "apple" | "banana">>];
