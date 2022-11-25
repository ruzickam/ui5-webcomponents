/* eslint-disable */
import { HTMLAttributes, ReactElement, ReactNode } from "react";
import { Slot } from "@ui5/webcomponents-base/src/jsx";

import { NotificationActionComponent } from "@ui5/webcomponents-fiori/src/NotificationAction";
import { NotificationListItemComponent } from "@ui5/webcomponents-fiori/src/NotificationListItem";

interface Slots {
  slotActions?: ReactElement<typeof NotificationActionComponent>[];
}

type ChildrenType = ReactElement<typeof NotificationListItemComponent>[];

type Inputs = {
  busy?: boolean;
  busyDelay?: any;
  priority?: "High" | "Low" | "Medium" | "None";
  read?: boolean;
  showClose?: boolean;
  titleText?: string;
  collapsed?: boolean;
  showCounter?: boolean;
};
type Outputs = {
  onUi5Close: (e: CustomEvent<void>) => void;
  onUi5Toggle: (e: CustomEvent<void>) => void;
};
export type NotificationListGroupItemProps = Partial<
  Inputs &
    Outputs &
    Omit<HTMLAttributes<HTMLElement>, "children"> & { children?: ChildrenType }
> &
  Slots;
