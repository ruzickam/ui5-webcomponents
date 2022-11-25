/* eslint-disable */
import { HTMLAttributes, ReactElement, ReactNode } from "react";
import { Slot } from "@ui5/webcomponents-base/src/jsx";

import { NotificationActionComponent } from "@ui5/webcomponents-fiori/src/NotificationAction";

interface Slots {
  slotActions?: ReactElement<typeof NotificationActionComponent>[];
}

type ChildrenType = undefined;

type Inputs = {
  busy?: boolean;
  busyDelay?: any;
  priority?: "High" | "Low" | "Medium" | "None";
  read?: boolean;
  showClose?: boolean;
  titleText?: string;
};
type Outputs = {
  onUi5Close: (e: CustomEvent<void>) => void;
};
export type NotificationListItemBaseProps = Partial<
  Inputs &
    Outputs &
    Omit<HTMLAttributes<HTMLElement>, "children"> & { children?: ChildrenType }
> &
  Slots;
