import {FC} from "react";

export declare function Slot<SlotType, Name extends string = 'default'>(props: { name: Name, children: SlotType}): JSX.Element;

export type AnyElement = string | number | boolean | null | undefined | JSX.Element;
