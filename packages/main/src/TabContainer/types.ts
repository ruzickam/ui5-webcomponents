/* eslint-disable */
import { HTMLAttributes, ReactElement, ReactNode } from "react";
import { Slot } from "@ui5/webcomponents-base/src/jsx";

import { TabComponent } from "@ui5/webcomponents/src/Tab";
import { TabSeparatorComponent } from "@ui5/webcomponents/src/TabSeparator";
import { ButtonComponent } from "@ui5/webcomponents/src/Button";

interface Slots {
  slotOverflowButton?: ReactElement<typeof ButtonComponent>;
  slotStartOverflowButton?: ReactElement<typeof ButtonComponent>;
}

type ChildrenType = ReactElement<
  typeof TabComponent | typeof TabSeparatorComponent
>[];

type Inputs = {
  allItems: any;
  collapsed?: boolean;
  contentBackgroundDesign?: any;
  fixed?: boolean;
  headerBackgroundDesign?: any;
  showOverflow?: boolean;
  tabLayout?: "Inline" | "Standard";
  tabsOverflowMode?: "End" | "StartAndEnd";
};
type Outputs = {
  onUi5TabSelect: (
    e: CustomEvent<{ tab: HTMLElement; tabIndex: number }>
  ) => void;
};
export type TabContainerProps = Partial<
  Inputs &
    Outputs &
    Omit<HTMLAttributes<HTMLElement>, "children"> & { children?: ChildrenType }
> &
  Slots;
