/* eslint-disable */
import { HTMLAttributes, ReactElement, ReactNode } from "react";
import { Slot } from "@ui5/webcomponents-base/src/jsx";

import { IconComponent } from "@ui5/webcomponents/src/Icon";

interface Slots {
  slotIcon?: ReactElement<typeof IconComponent>;
}

type ChildrenType = ReactNode;

type Inputs = {
  colorScheme?: string;
};
type Outputs = {};
export type BadgeProps = Partial<
  Inputs &
    Outputs &
    Omit<HTMLAttributes<HTMLElement>, "children"> & { children?: ChildrenType }
> &
  Slots;
