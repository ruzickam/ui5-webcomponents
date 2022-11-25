/* eslint-disable */
import { HTMLAttributes, ReactElement, ReactNode } from "react";
import { Slot } from "@ui5/webcomponents-base/src/jsx";

interface Slots {
  slotEndContent?: ReactNode;
  slotStartContent?: ReactNode;
}

type ChildrenType = ReactNode;

type Inputs = {
  design?: "FloatingFooter" | "Footer" | "Header" | "Subheader";
};
type Outputs = {};
export type BarProps = Partial<
  Inputs &
    Outputs &
    Omit<HTMLAttributes<HTMLElement>, "children"> & { children?: ChildrenType }
> &
  Slots;
