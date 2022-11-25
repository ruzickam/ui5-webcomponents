/* eslint-disable */
import { HTMLAttributes, ReactElement, ReactNode } from "react";
import { Slot } from "@ui5/webcomponents-base/src/jsx";

interface Slots {}

type ChildrenType = ReactNode;

type Inputs = {
  accessibleName: string;
  activeIcon?: string;
  design?:
    | "Attention"
    | "Default"
    | "Emphasized"
    | "Negative"
    | "Positive"
    | "Transparent";
  disabled?: boolean;
  icon?: string;
};
type Outputs = {
  onUi5ArrowClick: (e: CustomEvent<void>) => void;
  onUi5Click: (e: CustomEvent<void>) => void;
};
export type SplitButtonProps = Partial<
  Inputs &
    Outputs &
    Omit<HTMLAttributes<HTMLElement>, "children"> & { children?: ChildrenType }
> &
  Slots;
