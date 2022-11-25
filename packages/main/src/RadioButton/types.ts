/* eslint-disable */
import { HTMLAttributes } from "react";

type ChildrenType = undefined;

type Inputs = {
  accessibleName?: string;
  accessibleNameRef?: string;
  checked?: boolean;
  disabled?: boolean;
  name?: string;
  readonly?: boolean;
  required?: boolean;
  text?: string;
  value?: string;
  valueState?: "Error" | "Information" | "None" | "Success" | "Warning";
  wrappingType?: "None" | "Normal";
};
type Outputs = {
  onUi5Change: (e: CustomEvent<void>) => void;
};
export type RadioButtonProps = Partial<
  Inputs &
    Outputs &
    Omit<HTMLAttributes<HTMLElement>, "children"> & { children?: ChildrenType }
>;
