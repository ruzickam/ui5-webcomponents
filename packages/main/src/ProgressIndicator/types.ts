/* eslint-disable */
import { HTMLAttributes } from "react";

type ChildrenType = undefined;

type Inputs = {
  disabled?: boolean;
  displayValue: string;
  hideValue?: boolean;
  value?: any;
  valueState?: "Error" | "Information" | "None" | "Success" | "Warning";
};
type Outputs = {};
export type ProgressIndicatorProps = Partial<
  Inputs &
    Outputs &
    Omit<HTMLAttributes<HTMLElement>, "children"> & { children?: ChildrenType }
>;
