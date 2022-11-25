/* eslint-disable */
import { HTMLAttributes, ReactElement, ReactNode } from "react";
import { Slot } from "@ui5/webcomponents-base/src/jsx";

interface Slots {}

type ChildrenType = ReactNode;

type Inputs = {
  accessibilityAttributes: {
    expanded?: boolean;
    hasPopup?: "Dialog" | "Grid" | "Listbox" | "Menu" | "Tree";
  };
  accessibleName?: string;
  accessibleNameRef?: string;
  accessibleRole?: string;
  design?: "Default" | "Emphasized" | "Subtle";
  disabled?: boolean;
  href?: string;
  target?: string;
  wrappingType?: "None" | "Normal";
};
type Outputs = {
  onUi5Click: (
    e: CustomEvent<{
      altKey: boolean;
      ctrlKey: boolean;
      metaKey: boolean;
      shiftKey: boolean;
    }>
  ) => void;
};
export type LinkProps = Partial<
  Inputs &
    Outputs &
    Omit<HTMLAttributes<HTMLElement>, "children"> & { children?: ChildrenType }
> &
  Slots;
