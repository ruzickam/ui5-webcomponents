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
  dateValue: any;
  disabled?: boolean;
  hideWeekNumbers?: boolean;
  name?: string;
  placeholder?: string;
  readonly?: boolean;
  required?: boolean;
  value?: string;
  valueState?: "Error" | "Information" | "None" | "Success" | "Warning";
};
type Outputs = {
  onUi5Change: (e: CustomEvent<{ value: string; valid: boolean }>) => void;
  onUi5Input: (e: CustomEvent<{ value: string; valid: boolean }>) => void;
};
export type DatePickerProps = Partial<
  Inputs &
    Outputs &
    Omit<HTMLAttributes<HTMLElement>, "children"> & { children?: ChildrenType }
> &
  Slots;
