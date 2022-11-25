/* eslint-disable */
import { HTMLAttributes, ReactElement, ReactNode } from "react";
import { Slot } from "@ui5/webcomponents-base/src/jsx";

import { SideNavigationItemComponent } from "@ui5/webcomponents-fiori/src/SideNavigationItem";

interface Slots {
  slotFixedItems?: ReactElement<typeof SideNavigationItemComponent>[];
  slotHeader?: ReactNode;
}

type ChildrenType = ReactElement<typeof SideNavigationItemComponent>[];

type Inputs = {
  collapsed?: boolean;
};
type Outputs = {
  onUi5SelectionChange: (e: CustomEvent<{ item: HTMLElement }>) => void;
};
export type SideNavigationProps = Partial<
  Inputs &
    Outputs &
    Omit<HTMLAttributes<HTMLElement>, "children"> & { children?: ChildrenType }
> &
  Slots;
