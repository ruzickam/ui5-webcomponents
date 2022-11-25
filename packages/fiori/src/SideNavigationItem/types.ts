/* eslint-disable */
import { HTMLAttributes, ReactElement, ReactNode } from "react";
import { Slot } from "@ui5/webcomponents-base/src/jsx";

import { SideNavigationSubItemComponent } from "@ui5/webcomponents-fiori/src/SideNavigationSubItem";

interface Slots {}

type ChildrenType = ReactElement<typeof SideNavigationSubItemComponent>[];

type Inputs = {
  expanded?: boolean;
  icon?: string;
  selected?: boolean;
  text?: string;
  wholeItemToggleable?: boolean;
};
type Outputs = {};
export type SideNavigationItemProps = Partial<
  Inputs &
    Outputs &
    Omit<HTMLAttributes<HTMLElement>, "children"> & { children?: ChildrenType }
> &
  Slots;
