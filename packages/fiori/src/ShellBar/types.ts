/* eslint-disable */
import { HTMLAttributes, ReactElement, ReactNode } from "react";
import { Slot } from "@ui5/webcomponents-base/src/jsx";

import { ShellBarItemComponent } from "@ui5/webcomponents-fiori/src/ShellBarItem";
import { AvatarComponent } from "@ui5/webcomponents/src/Avatar";
import { NotificationListGroupItemComponent } from "@ui5/webcomponents-fiori/src/NotificationListGroupItem";
import { NotificationListItemComponent } from "@ui5/webcomponents-fiori/src/NotificationListItem";
import { CustomListItemComponent } from "@ui5/webcomponents/src/CustomListItem";
import { GroupHeaderListItemComponent } from "@ui5/webcomponents/src/GroupHeaderListItem";
import { StandardListItemComponent } from "@ui5/webcomponents/src/StandardListItem";
import { InputComponent } from "@ui5/webcomponents/src/Input";
import { ButtonComponent } from "@ui5/webcomponents/src/Button";

interface Slots {
  slotLogo?: ReactElement<typeof AvatarComponent>;
  slotMenuItems?: ReactElement<
    | typeof NotificationListGroupItemComponent
    | typeof NotificationListItemComponent
    | typeof CustomListItemComponent
    | typeof GroupHeaderListItemComponent
    | typeof StandardListItemComponent
  >[];
  slotProfile?: ReactElement<typeof AvatarComponent>;
  slotSearchField?: ReactElement<typeof InputComponent>;
  slotStartButton?: ReactElement<typeof ButtonComponent>;
}

type ChildrenType = ReactElement<typeof ShellBarItemComponent>[];

type Inputs = {
  accessibilityRoles: Record<string, any>;
  accessibilityTexts: Record<string, any>;
  copilotDomRef: HTMLElement;
  logoDomRef: HTMLElement;
  notificationsCount?: string;
  notificationsDomRef: HTMLElement;
  overflowDomRef: HTMLElement;
  primaryTitle?: string;
  productSwitchDomRef: HTMLElement;
  profileDomRef: HTMLElement;
  secondaryTitle?: string;
  showCoPilot?: boolean;
  showNotifications?: boolean;
  showProductSwitch?: boolean;
};
type Outputs = {
  onUi5CoPilotClick: (e: CustomEvent<{ targetRef: HTMLElement }>) => void;
  onUi5LogoClick: (e: CustomEvent<{ targetRef: HTMLElement }>) => void;
  onUi5MenuItemClick: (e: CustomEvent<{ item: HTMLElement }>) => void;
  onUi5NotificationsClick: (e: CustomEvent<{ targetRef: HTMLElement }>) => void;
  onUi5ProductSwitchClick: (e: CustomEvent<{ targetRef: HTMLElement }>) => void;
  onUi5ProfileClick: (e: CustomEvent<{ targetRef: HTMLElement }>) => void;
};
export type ShellBarProps = Partial<
  Inputs &
    Outputs &
    Omit<HTMLAttributes<HTMLElement>, "children"> & { children?: ChildrenType }
> &
  Slots;
