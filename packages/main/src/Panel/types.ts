/* eslint-disable */
import { HTMLAttributes, ReactElement, ReactNode } from "react";
import { Slot } from "@ui5/webcomponents-base/src/jsx";

interface Slots {
  slotHeader?: ReactNode;
}

type ChildrenType = ReactNode;

type Inputs = {
  accessibleName?: string;
  accessibleRole?: "Complementary" | "Form" | "Region";
  collapsed?: boolean;
  fixed?: boolean;
  headerLevel?: "H1" | "H2" | "H3" | "H4" | "H5" | "H6";
  headerText?: string;
  noAnimation?: boolean;
};
type Outputs = {
  onUi5Toggle: (e: CustomEvent<void>) => void;
};
export type PanelProps = Partial<
  Inputs &
    Outputs &
    Omit<HTMLAttributes<HTMLElement>, "children"> & { children?: ChildrenType }
> &
  Slots;
