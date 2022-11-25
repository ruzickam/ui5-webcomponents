/* eslint-disable */
import { HTMLAttributes, ReactElement, ReactNode } from "react";
import { Slot } from "@ui5/webcomponents-base/src/jsx";

interface Slots {
  slotBadge?: ReactNode;
}

type ChildrenType = ReactNode;

type Inputs = {
  accessibleName?: string;
  colorScheme?:
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
    | "Placeholder";
  icon?: string;
  initials?: string;
  interactive?: boolean;
  shape?: "Circle" | "Square";
  size?: "L" | "M" | "S" | "XL" | "XS";
};
type Outputs = {};
export type AvatarProps = Partial<
  Inputs &
    Outputs &
    Omit<HTMLAttributes<HTMLElement>, "children"> & { children?: ChildrenType }
> &
  Slots;
