/* eslint-disable */
import { HTMLAttributes, ReactElement, ReactNode } from "react";
import { Slot } from "@ui5/webcomponents-base/src/jsx";

import { MultiComboBoxGroupItemComponent } from "@ui5/webcomponents/src/MultiComboBoxGroupItem";
import { MultiComboBoxItemComponent } from "@ui5/webcomponents/src/MultiComboBoxItem";
import { IconComponent } from "@ui5/webcomponents/src/Icon";

interface Slots {
  slotIcon?: ReactElement<typeof IconComponent>;
  slotValueStateMessage?: ReactNode;
}

type ChildrenType = ReactElement<
  typeof MultiComboBoxGroupItemComponent | typeof MultiComboBoxItemComponent
>[];

type Inputs = {
  accessibleName: string;
  accessibleNameRef?: string;
  allowCustomValues?: boolean;
  disabled?: boolean;
  filter?: string;
  noTypeahead?: boolean;
  open?: boolean;
  placeholder?: string;
  readonly?: boolean;
  required?: boolean;
  value?: string;
  valueState?: "Error" | "Information" | "None" | "Success" | "Warning";
};
type Outputs = {
  onUi5Change: (e: CustomEvent<void>) => void;
  onUi5Input: (e: CustomEvent<void>) => void;
  onUi5OpenChange: (e: CustomEvent<void>) => void;
  onUi5SelectionChange: (e: CustomEvent<{ items: Array<any> }>) => void;
};
export type MultiComboBoxProps = Partial<
  Inputs &
    Outputs &
    Omit<HTMLAttributes<HTMLElement>, "children"> & { children?: ChildrenType }
> &
  Slots;
