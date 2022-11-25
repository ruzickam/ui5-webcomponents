/* eslint-disable */
import { HTMLAttributes, ReactElement, ReactNode } from "react";
import { Slot } from "@ui5/webcomponents-base/src/jsx";

interface Slots {
  slotValueStateMessage?: ReactNode;
}

type ChildrenType = ReactNode;

type Inputs = {
  accept?: string;
  disabled?: boolean;
  files: any;
  hideInput?: boolean;
  multiple?: boolean;
  name?: string;
  placeholder?: string;
  value?: string;
  valueState?: "Error" | "Information" | "None" | "Success" | "Warning";
};
type Outputs = {
  onUi5Change: (e: CustomEvent<{ files: any }>) => void;
};
export type FileUploaderProps = Partial<
  Inputs &
    Outputs &
    Omit<HTMLAttributes<HTMLElement>, "children"> & { children?: ChildrenType }
> &
  Slots;
