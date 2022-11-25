/* eslint-disable */
import { HTMLAttributes, ReactElement, ReactNode } from "react";
import { Slot } from "@ui5/webcomponents-base/src/jsx";

import { CalendarDateComponent } from "@ui5/webcomponents/src/CalendarDate";

interface Slots {}

type ChildrenType = ReactElement<typeof CalendarDateComponent>[];

type Inputs = {
  hideWeekNumbers?: boolean;
  selectionMode?: "Multiple" | "Range" | "Single";
};
type Outputs = {
  onUi5SelectedDatesChange: (
    e: CustomEvent<{ values: Array<any>; dates: Array<any> }>
  ) => void;
};
export type CalendarProps = Partial<
  Inputs &
    Outputs &
    Omit<HTMLAttributes<HTMLElement>, "children"> & { children?: ChildrenType }
> &
  Slots;
