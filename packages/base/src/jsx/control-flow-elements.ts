import {FC, ReactNode} from "react";

export declare const Show: FC<{ when: boolean, children: ReactNode }>;

export function For<T, U extends JSX.Element>(props: {
    each: readonly T[];
    keyFn: (item: T) => T[keyof T] | T;
    children: (item: T, index: number) => U;
}): any {
    return null;
}
