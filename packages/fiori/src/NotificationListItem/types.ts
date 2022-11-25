/* eslint-disable */
import { HTMLAttributes, ReactElement, ReactNode } from "react";
import { Slot } from "@ui5/webcomponents-base/src/jsx";

import { NotificationActionComponent } from "@ui5/webcomponents-fiori/src/NotificationAction";
import { AvatarComponent } from "@ui5/webcomponents/src/Avatar";

interface Slots {
  slotActions?: ReactElement<typeof NotificationActionComponent>[];
  slotAvatar?: ReactElement<typeof AvatarComponent>;
  slotFootnotes?: ReactNode;
}

type ChildrenType = ReactNode;

type Inputs = {
  busy?: boolean;
  busyDelay?: any;
  priority?: "High" | "Low" | "Medium" | "None";
  read?: boolean;
  showClose?: boolean;
  titleText?: string;
  wrappingType?: "None" | "Normal";
};
type Outputs = {
  onUi5Close: (e: CustomEvent<void>) => void;
};
export type NotificationListItemProps = Partial<
  Inputs &
    Outputs &
    Omit<HTMLAttributes<HTMLElement>, "children"> & { children?: ChildrenType }
> &
  Slots;
