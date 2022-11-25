/* eslint-disable */
import { HTMLAttributes } from "react";

type ChildrenType = undefined;

type Inputs = {
  accessibleName?: string;
  accessibleNameRef?: string;
  checked?: boolean;
  disabled?: boolean;
  indeterminate?: boolean;
  name?: string;
  readonly?: boolean;
  required?: boolean;
  text?: string;
  valueState?: "Error" | "Information" | "None" | "Success" | "Warning";
  wrappingType?: "None" | "Normal";
};
type Outputs = {
  onUi5Change: (e: CustomEvent<void>) => void;
};
export type CheckBoxProps = Partial<
  Inputs &
    Outputs &
    Omit<HTMLAttributes<HTMLElement>, "children"> & { children?: ChildrenType }
>;
