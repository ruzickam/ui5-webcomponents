/* eslint-disable */
import { HTMLAttributes, ReactElement, ReactNode } from "react";
import { Slot } from "@ui5/webcomponents-base/src/jsx";

interface Slots {
  slotHeader?: ReactNode;
}

type ChildrenType = ReactNode;

type Inputs = {
  accessibleName?: string;
  accessibleNameRef?: string;
};
type Outputs = {};
export type CardProps = Partial<
  Inputs &
    Outputs &
    Omit<HTMLAttributes<HTMLElement>, "children"> & { children?: ChildrenType }
> &
  Slots;
