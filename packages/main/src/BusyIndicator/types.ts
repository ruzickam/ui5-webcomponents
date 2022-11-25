/* eslint-disable */
import { HTMLAttributes, ReactElement, ReactNode } from "react";
import { Slot } from "@ui5/webcomponents-base/src/jsx";

interface Slots {}

type ChildrenType = ReactNode;

type Inputs = {
  active?: boolean;
  delay?: any;
  size?: "Large" | "Medium" | "Small";
  text?: string;
};
type Outputs = {};
export type BusyIndicatorProps = Partial<
  Inputs &
    Outputs &
    Omit<HTMLAttributes<HTMLElement>, "children"> & { children?: ChildrenType }
> &
  Slots;
