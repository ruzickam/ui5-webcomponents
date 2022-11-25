/* eslint-disable */
import { HTMLAttributes, ReactElement, ReactNode } from "react";
import { Slot } from "@ui5/webcomponents-base/src/jsx";

interface Slots {
  slotValueStateMessage?: ReactNode;
}

type ChildrenType = undefined;

type Inputs = {
  accessibleName: string;
  accessibleNameRef?: string;
  disabled?: boolean;
  growing?: boolean;
  growingMaxLines?: any;
  maxlength?: any;
  name?: string;
  placeholder?: string;
  readonly?: boolean;
  required?: boolean;
  rows?: any;
  showExceededText?: boolean;
  value?: string;
  valueState?: "Error" | "Information" | "None" | "Success" | "Warning";
};
type Outputs = {
  onUi5Change: (e: CustomEvent<void>) => void;
  onUi5Input: (e: CustomEvent<void>) => void;
};
export type TextAreaProps = Partial<
  Inputs &
    Outputs &
    Omit<HTMLAttributes<HTMLElement>, "children"> & { children?: ChildrenType }
> &
  Slots;
