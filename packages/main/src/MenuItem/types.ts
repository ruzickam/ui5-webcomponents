/* eslint-disable */
import { HTMLAttributes, ReactElement, ReactNode } from "react";
import { Slot } from "@ui5/webcomponents-base/src/jsx";

import { MenuItemComponent } from "@ui5/webcomponents/src/MenuItem";

interface Slots {}

type ChildrenType = ReactElement<typeof MenuItemComponent>[];

type Inputs = {
  accessibleName?: string;
  additionalText: string;
  disabled?: boolean;
  icon?: string;
  startsSection?: boolean;
  text?: string;
};
type Outputs = {};
export type MenuItemProps = Partial<
  Inputs &
    Outputs &
    Omit<HTMLAttributes<HTMLElement>, "children"> & { children?: ChildrenType }
> &
  Slots;
