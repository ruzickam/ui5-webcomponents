/* eslint-disable */
import { HTMLAttributes, ReactElement, ReactNode } from "react";
import { Slot } from "@ui5/webcomponents-base/src/jsx";

import { NotificationListGroupItemComponent } from "@ui5/webcomponents-fiori/src/NotificationListGroupItem";
import { NotificationListItemComponent } from "@ui5/webcomponents-fiori/src/NotificationListItem";
import { CustomListItemComponent } from "@ui5/webcomponents/src/CustomListItem";
import { GroupHeaderListItemComponent } from "@ui5/webcomponents/src/GroupHeaderListItem";
import { StandardListItemComponent } from "@ui5/webcomponents/src/StandardListItem";

interface Slots {
  slotHeader?: ReactNode;
}

type ChildrenType = ReactElement<
  | typeof NotificationListGroupItemComponent
  | typeof NotificationListItemComponent
  | typeof CustomListItemComponent
  | typeof GroupHeaderListItemComponent
  | typeof StandardListItemComponent
>[];

type Inputs = {
  accessibleName?: string;
  accessibleNameRef?: string;
  accessibleRole?: string;
  busy?: boolean;
  busyDelay?: any;
  footerText?: string;
  growing?: "Button" | "None" | "Scroll";
  headerText?: string;
  indent?: boolean;
  mode?:
    | "Delete"
    | "MultiSelect"
    | "None"
    | "SingleSelect"
    | "SingleSelectAuto"
    | "SingleSelectBegin"
    | "SingleSelectEnd";
  noDataText?: string;
  separators?: "All" | "Inner" | "None";
};
type Outputs = {
  onUi5ItemClick: (e: CustomEvent<{ item: HTMLElement }>) => void;
  onUi5ItemClose: (e: CustomEvent<{ item: HTMLElement }>) => void;
  onUi5ItemDelete: (e: CustomEvent<{ item: HTMLElement }>) => void;
  onUi5ItemToggle: (e: CustomEvent<{ item: HTMLElement }>) => void;
  onUi5LoadMore: (e: CustomEvent<void>) => void;
  onUi5SelectionChange: (
    e: CustomEvent<{
      selectedItems: Array<any>;
      previouslySelectedItems: Array<any>;
    }>
  ) => void;
};
export type ListProps = Partial<
  Inputs &
    Outputs &
    Omit<HTMLAttributes<HTMLElement>, "children"> & { children?: ChildrenType }
> &
  Slots;
