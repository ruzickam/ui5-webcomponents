/* eslint-disable */
import { HTMLAttributes, ReactElement, ReactNode } from "react";
import { Slot } from "@ui5/webcomponents-base/src/jsx";

interface Slots {
  slotFooter?: ReactNode;
  slotHeader?: ReactNode;
}

type ChildrenType = undefined;

type Inputs = {
  allowTargetOverlap?: boolean;
  headerText?: string;
  hideArrow?: boolean;
  hideBackdrop?: boolean;
  horizontalAlign?: "Center" | "Left" | "Right" | "Stretch";
  modal?: boolean;
  opener?: any;
  placementType?: "Bottom" | "Left" | "Right" | "Top";
  verticalAlign?: "Bottom" | "Center" | "Stretch" | "Top";
};
type Outputs = {};
export type PopoverProps = Partial<
  Inputs &
    Outputs &
    Omit<HTMLAttributes<HTMLElement>, "children"> & { children?: ChildrenType }
> &
  Slots;
