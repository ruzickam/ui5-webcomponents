/* eslint-disable */
import { HTMLAttributes, ReactElement, ReactNode } from "react";
import { Slot } from "@ui5/webcomponents-base/src/jsx";

import { MenuItemComponent } from "@ui5/webcomponents/src/MenuItem";

interface Slots {}

type ChildrenType = ReactElement<typeof MenuItemComponent>[];

type Inputs = {
  headerText?: string;
  open?: boolean;
  opener?: any;
};
type Outputs = {
  onUi5AfterClose: (e: CustomEvent<void>) => void;
  onUi5AfterOpen: (e: CustomEvent<void>) => void;
  onUi5BeforeClose: (e: CustomEvent<{ escPressed: boolean }>) => void;
  onUi5BeforeOpen: (e: CustomEvent<void>) => void;
  onUi5ItemClick: (
    e: CustomEvent<{ item: Record<string, any>; text: string }>
  ) => void;
};
export type MenuProps = Partial<
  Inputs &
    Outputs &
    Omit<HTMLAttributes<HTMLElement>, "children"> & { children?: ChildrenType }
> &
  Slots;
