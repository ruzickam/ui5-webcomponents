/* eslint-disable */
import { HTMLAttributes, ReactElement, ReactNode } from "react";
import { Slot } from "@ui5/webcomponents-base/src/jsx";

import { ComboBoxGroupItemComponent } from "@ui5/webcomponents/src/ComboBoxGroupItem";
import { ComboBoxItemComponent } from "@ui5/webcomponents/src/ComboBoxItem";
import { IconComponent } from "@ui5/webcomponents/src/Icon";

interface Slots {
  slotIcon?: ReactElement<typeof IconComponent>;
  slotValueStateMessage?: ReactNode;
}

type ChildrenType = ReactElement<
  typeof ComboBoxGroupItemComponent | typeof ComboBoxItemComponent
>[];

type Inputs = {
  accessibleName: string;
  accessibleNameRef?: string;
  disabled?: boolean;
  filter?: string;
  loading?: boolean;
  placeholder?: string;
  readonly?: boolean;
  required?: boolean;
  value?: string;
  valueState?: "Error" | "Information" | "None" | "Success" | "Warning";
};
type Outputs = {
  onUi5Change: (e: CustomEvent<void>) => void;
  onUi5Input: (e: CustomEvent<void>) => void;
  onUi5SelectionChange: (e: CustomEvent<{ item: HTMLElement }>) => void;
};
export type ComboBoxProps = Partial<
  Inputs &
    Outputs &
    Omit<HTMLAttributes<HTMLElement>, "children"> & { children?: ChildrenType }
> &
  Slots;
