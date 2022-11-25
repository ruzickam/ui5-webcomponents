/* eslint-disable */
import { HTMLAttributes, ReactElement, ReactNode } from "react";
import { Slot } from "@ui5/webcomponents-base/src/jsx";

interface Slots {}

type ChildrenType = ReactNode;

type Inputs = {
  accessibilityAttributes: {
    expanded?: boolean;
    hasPopup?: "Dialog" | "Grid" | "Listbox" | "Menu" | "Tree";
    controls?: string | HTMLElement | Array<HTMLElement | string>;
  };
  accessibleName: string;
  accessibleNameRef?: string;
  design?:
    | "Attention"
    | "Default"
    | "Emphasized"
    | "Negative"
    | "Positive"
    | "Transparent";
  disabled?: boolean;
  icon?: string;
  iconEnd?: boolean;
  submits?: boolean;
  tooltip: string;
};
type Outputs = {
  onUi5Click: (e: CustomEvent<void>) => void;
};
export type ButtonProps = Partial<
  Inputs &
    Outputs &
    Omit<HTMLAttributes<HTMLElement>, "children"> & { children?: ChildrenType }
> &
  Slots;
