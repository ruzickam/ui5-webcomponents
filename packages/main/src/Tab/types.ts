/* eslint-disable */
import { HTMLAttributes, ReactElement, ReactNode } from "react";
import { Slot } from "@ui5/webcomponents-base/src/jsx";

import { TabSeparatorComponent } from "@ui5/webcomponents/src/TabSeparator";
import { TabComponent } from "@ui5/webcomponents/src/Tab";

interface Slots {
  slotSubTabs?: ReactElement<
    typeof TabSeparatorComponent | typeof TabComponent
  >[];
}

type ChildrenType = ReactNode;

type Inputs = {
  additionalText?: string;
  design?: "Critical" | "Default" | "Negative" | "Neutral" | "Positive";
  disabled?: boolean;
  icon?: string;
  selected?: boolean;
  text?: string;
};
type Outputs = {};
export type TabProps = Partial<
  Inputs &
    Outputs &
    Omit<HTMLAttributes<HTMLElement>, "children"> & { children?: ChildrenType }
> &
  Slots;
