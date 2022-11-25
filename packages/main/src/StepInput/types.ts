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
  max: any;
  min: any;
  name?: string;
  placeholder?: string;
  readonly?: boolean;
  required?: boolean;
  step?: any;
  value?: any;
  valuePrecision?: any;
  valueState?: "Error" | "Information" | "None" | "Success" | "Warning";
};
type Outputs = {
  onUi5Change: (e: CustomEvent<void>) => void;
};
export type StepInputProps = Partial<
  Inputs &
    Outputs &
    Omit<HTMLAttributes<HTMLElement>, "children"> & { children?: ChildrenType }
> &
  Slots;
