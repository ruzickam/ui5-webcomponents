/* eslint-disable */
import { HTMLAttributes, ReactElement, ReactNode } from "react";
import { Slot } from "@ui5/webcomponents-base/src/jsx";

interface Slots {}

type ChildrenType = ReactNode;

type Inputs = {
  accessibleName: string;
  additionalText: string;
  additionalTextState?:
    | "Error"
    | "Information"
    | "None"
    | "Success"
    | "Warning";
  expanded?: boolean;
  icon?: string;
  level?: any;
  showToggleButton?: boolean;
};
type Outputs = {
  onUi5StepIn: (e: CustomEvent<{ item: HTMLElement }>) => void;
  onUi5StepOut: (e: CustomEvent<{ item: HTMLElement }>) => void;
  onUi5Toggle: (e: CustomEvent<{ item: HTMLElement }>) => void;
};
export type TreeListItemProps = Partial<
  Inputs &
    Outputs &
    Omit<HTMLAttributes<HTMLElement>, "children"> & { children?: ChildrenType }
> &
  Slots;
