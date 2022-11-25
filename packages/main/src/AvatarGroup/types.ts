/* eslint-disable */
import { HTMLAttributes, ReactElement, ReactNode } from "react";
import { Slot } from "@ui5/webcomponents-base/src/jsx";

import { AvatarComponent } from "@ui5/webcomponents/src/Avatar";

interface Slots {
  slotOverflowButton?: ReactNode;
}

type ChildrenType = ReactElement<typeof AvatarComponent>[];

type Inputs = {
  colorScheme?: Array<
    | "Accent1"
    | "Accent10"
    | "Accent2"
    | "Accent3"
    | "Accent4"
    | "Accent5"
    | "Accent6"
    | "Accent7"
    | "Accent8"
    | "Accent9"
    | "Placeholder"
  >;
  hiddenItems?: Array<HTMLElement>;
  type?: "Group" | "Individual";
};
type Outputs = {
  onUi5Click: (
    e: CustomEvent<{ targetRef: HTMLElement; overflowButtonClicked: boolean }>
  ) => void;
  onUi5Overflow: (e: CustomEvent<void>) => void;
};
export type AvatarGroupProps = Partial<
  Inputs &
    Outputs &
    Omit<HTMLAttributes<HTMLElement>, "children"> & { children?: ChildrenType }
> &
  Slots;
