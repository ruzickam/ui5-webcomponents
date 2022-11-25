/* eslint-disable */
import { HTMLAttributes, ReactElement, ReactNode } from "react";
import { Slot } from "@ui5/webcomponents-base/src/jsx";

interface Slots {
  slotSideContent?: ReactNode;
}

type ChildrenType = ReactNode;

type Inputs = {
  equalSplit?: boolean;
  hideMainContent?: boolean;
  hideSideContent?: boolean;
  sideContentFallDown?: "BelowL" | "BelowM" | "BelowXL" | "OnMinimumWidth";
  sideContentPosition?: "End" | "Start";
  sideContentVisibility?:
    | "AlwaysShow"
    | "NeverShow"
    | "ShowAboveL"
    | "ShowAboveM"
    | "ShowAboveS";
};
type Outputs = {
  onUi5LayoutChange: (
    e: CustomEvent<{
      currentBreakpoint: string;
      previousBreakpoint: string;
      mainContentVisible: boolean;
      sideContentVisible: boolean;
    }>
  ) => void;
};
export type DynamicSideContentProps = Partial<
  Inputs &
    Outputs &
    Omit<HTMLAttributes<HTMLElement>, "children"> & { children?: ChildrenType }
> &
  Slots;
