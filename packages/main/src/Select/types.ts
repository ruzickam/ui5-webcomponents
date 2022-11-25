/* eslint-disable */
import { HTMLAttributes, ReactElement, ReactNode } from "react";
import { Slot } from "@ui5/webcomponents-base/src/jsx";

import { OptionComponent } from "@ui5/webcomponents/src/Option";

interface Slots {
  slotValueStateMessage?: ReactNode;
}

type ChildrenType = ReactElement<typeof OptionComponent>[];

type Inputs = {
  accessibleName: string;
  accessibleNameRef?: string;
  disabled?: boolean;
  name?: string;
  required?: boolean;
  selectedOption: Option;
  valueState?: "Error" | "Information" | "None" | "Success" | "Warning";
};
type Outputs = {
  onUi5Change: (e: CustomEvent<{ selectedOption: HTMLElement }>) => void;
};
export type SelectProps = Partial<
  Inputs &
    Outputs &
    Omit<HTMLAttributes<HTMLElement>, "children"> & { children?: ChildrenType }
> &
  Slots;
