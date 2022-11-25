/* eslint-disable */
import { HTMLAttributes, ReactElement, ReactNode } from "react";
import { Slot } from "@ui5/webcomponents-base/src/jsx";

interface Slots {}

type ChildrenType = ReactNode;

type Inputs = {
  duration?: any;
  placement?:
    | "BottomCenter"
    | "BottomEnd"
    | "BottomStart"
    | "MiddleCenter"
    | "MiddleEnd"
    | "MiddleStart"
    | "TopCenter"
    | "TopEnd"
    | "TopStart";
};
type Outputs = {};
export type ToastProps = Partial<
  Inputs &
    Outputs &
    Omit<HTMLAttributes<HTMLElement>, "children"> & { children?: ChildrenType }
> &
  Slots;
