/* eslint-disable */
import { HTMLAttributes, ReactElement, ReactNode } from "react";
import { Slot } from "@ui5/webcomponents-base/src/jsx";

interface Slots {
  slotFooter?: ReactNode;
  slotHeader?: ReactNode;
}

type ChildrenType = undefined;

type Inputs = {
  draggable?: boolean;
  headerText?: string;
  resizable?: boolean;
  state?: "Error" | "Information" | "None" | "Success" | "Warning";
  stretch?: boolean;
};
type Outputs = {};
export type DialogProps = Partial<
  Inputs &
    Outputs &
    Omit<HTMLAttributes<HTMLElement>, "children"> & { children?: ChildrenType }
> &
  Slots;
