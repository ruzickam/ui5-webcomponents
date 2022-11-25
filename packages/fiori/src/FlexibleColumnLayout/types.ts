/* eslint-disable */
import { HTMLAttributes, ReactElement, ReactNode } from "react";
import { Slot } from "@ui5/webcomponents-base/src/jsx";

interface Slots {
  slotEndColumn?: ReactNode;
  slotMidColumn?: ReactNode;
  slotStartColumn?: ReactNode;
}

type ChildrenType = undefined;

type Inputs = {
  accessibilityRoles: Record<string, any>;
  accessibilityTexts: Record<string, any>;
  columnLayout?: Array<any>;
  endColumnVisible?: boolean;
  hideArrows?: boolean;
  layout?:
    | "EndColumnFullScreen"
    | "MidColumnFullScreen"
    | "OneColumn"
    | "ThreeColumnsEndExpanded"
    | "ThreeColumnsMidExpanded"
    | "ThreeColumnsMidExpandedEndHidden"
    | "ThreeColumnsStartExpandedEndHidden"
    | "TwoColumnsMidExpanded"
    | "TwoColumnsStartExpanded";
  midColumnVisible?: boolean;
  startColumnVisible?: boolean;
  visibleColumns?: any;
};
type Outputs = {
  onUi5LayoutChange: (
    e: CustomEvent<{
      layout:
        | "EndColumnFullScreen"
        | "MidColumnFullScreen"
        | "OneColumn"
        | "ThreeColumnsEndExpanded"
        | "ThreeColumnsMidExpanded"
        | "ThreeColumnsMidExpandedEndHidden"
        | "ThreeColumnsStartExpandedEndHidden"
        | "TwoColumnsMidExpanded"
        | "TwoColumnsStartExpanded";
      columnLayout: Array<any>;
      startColumnVisible: boolean;
      midColumnVisible: boolean;
      endColumnVisible: boolean;
      arrowsUsed: boolean;
      resize: boolean;
    }>
  ) => void;
};
export type FlexibleColumnLayoutProps = Partial<
  Inputs &
    Outputs &
    Omit<HTMLAttributes<HTMLElement>, "children"> & { children?: ChildrenType }
> &
  Slots;
