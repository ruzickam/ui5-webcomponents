/* eslint-disable */
import { HTMLAttributes } from "react";

type ChildrenType = undefined;

type Inputs = {
  accessibleName: string;
  accessibleNameRef?: string;
  checked?: boolean;
  design?: "Graphical" | "Textual";
  disabled?: boolean;
  textOff?: string;
  textOn?: string;
  tooltip: string;
};
type Outputs = {
  onUi5Change: (e: CustomEvent<void>) => void;
};
export type SwitchProps = Partial<
  Inputs &
    Outputs &
    Omit<HTMLAttributes<HTMLElement>, "children"> & { children?: ChildrenType }
>;
